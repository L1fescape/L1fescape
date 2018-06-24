import * as marked from 'marked'
import * as hljs from 'highlight.js'
import * as yaml from 'js-yaml'
import * as moment from 'moment'
import { BLOG_ROOT } from 'ak.gg/constants'
declare var require: any
const postFiles = require.context('ak.gg/pages/blog/articles', true, /\.md$/)

const withCursorHighlighting = (code: string) => {
  const regex = /(^|\r|\n|\r\n)(❯|\$)/g
  return code.replace(regex, '$1<span class="bash-cursor">$2</span>')
}

const renderer = new marked.Renderer()
renderer.code = (code, optionsStr: string) => {
  // parse language and options
  const allowedOptions = ['wrap']
  const options = optionsStr ? optionsStr.split('+') : []
  const language = options.splice(0, 1)[0]
  const validLang = !!(language && hljs.getLanguage(language))
  // highlight and add class names
  const highlighted = validLang ? hljs.highlight(language, code).value : code
  const optionClasses = allowedOptions.filter(className => options.indexOf(className) > -1)
  const className = `hljs ${validLang ? language : ''} ${optionClasses.join(' ')}`
  return `<pre><code class="${className}">${withCursorHighlighting(highlighted)}</code></pre>`
}
marked.setOptions({ renderer })

export interface Post {
  title: string
  path: string
  content: string
  date: string
  rawDate: string
  layout?: React.ComponentClass
}

interface Meta {
  title: string
  date: string
}

interface RawPost {
  file: string
  fileName: string
}

export const getPostList = (postFiles: RawPost[]): Post[] => (
  postFiles.map(rawPost => parsePost(rawPost))
           .sort((a: Post, b: Post) => +b.rawDate - +a.rawDate)
)

const parsePost = (rawPost: RawPost): Post => {
  const sections = rawPost.file.split('---')
  const meta: Meta = yaml.load(sections[1])
  const body = sections[2]
  return {
    title: meta.title,
    date: moment(meta.date).format('MMMM D YYYY'),
    rawDate: meta.date,
    path: `${BLOG_ROOT}/${rawPost.fileName.replace(/\.\/|.md$/g, '')}`,
    content: marked(body),
  }
}

export const postReducer = (acc, p: Post) => {
  acc[p.path] = p
  return acc
}

const rawPostFiles: RawPost[] = (
  postFiles
    .keys()
    .map(fileName => ({
      fileName,
      file: postFiles(fileName),
    }))
)

type GroupedPosts = { [key: string]: Post[] }

export const groupPosts = (posts: Post[]): GroupedPosts => {
  const postReducer = (groupedPosts: GroupedPosts, post: Post) => {
    const year = new Date(post.rawDate).getFullYear()
    if (!groupedPosts[year]) {
      groupedPosts[year] = []
    }
    groupedPosts[year].push(post)
    return groupedPosts
  }
  return posts.reduce(postReducer, {})
}

export const parsedPosts = getPostList(rawPostFiles)
