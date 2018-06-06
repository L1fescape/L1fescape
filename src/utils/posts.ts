import * as marked from 'marked'
import * as yaml from 'js-yaml'
import * as moment from 'moment'
import { POSTS_ROOT } from 'ak.gg/pages/posts'
declare var require: any
const articleFiles = require.context('ak.gg/pages/posts/articles', true, /\.md$/)

export interface Article {
  title: string
  path: string
  post: string
  date: string
}

interface Meta {
  title: string
  date: string
}

export const getArticleList = (): Article[] => articleFiles.keys().map((key) => parseArticle(articleFiles(key), key))

const parseArticle = (articleFile: string, key: string): Article => {
  const sections = articleFile.split('---')
  const meta: Meta = yaml.load(sections[1])
  const body = sections[2]
  return {
    title: meta.title,
    date: moment(meta.date).format('MMM Do YYYY'),
    path: `${POSTS_ROOT}/${key.replace(/\.\/|.md$/g, '')}`,
    post: marked(body),
  }
}