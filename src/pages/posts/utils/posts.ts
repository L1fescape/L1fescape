import * as marked from 'marked'
import * as yaml from 'js-yaml'
import * as moment from 'moment'
declare var require: any
const articleFiles = require.context('ak.gg/pages/posts/articles', true, /\.md$/)

export const POSTS_ROOT = '/posts'

export interface Article {
  title: string
  path: string
  post: string
  date: string
  rawDate: string
  layout?: React.ComponentClass
}

interface Meta {
  title: string
  date: string
}

export const getArticleList = (): Article[] => (
  articleFiles.keys()
              .map(key => parseArticle(articleFiles(key), key))
              .sort((a: Article, b: Article) => +b.rawDate - +a.rawDate)
)

const parseArticle = (articleFile: string, key: string): Article => {
  const sections = articleFile.split('---')
  const meta: Meta = yaml.load(sections[1])
  const body = sections[2]
  return {
    title: meta.title,
    date: moment(meta.date).format('MMMM D YYYY'),
    rawDate: meta.date,
    path: `${POSTS_ROOT}/${key.replace(/\.\/|.md$/g, '')}`,
    post: marked(body),
  }
}

export const articleReducer = (acc, a) => {
  acc[a.path] = a
  return acc
}
