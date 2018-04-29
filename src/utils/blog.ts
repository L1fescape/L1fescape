import * as marked from 'marked'
declare var require: any

const BLOG_ROOT = '/blog'

export interface Article {
  title: string
  path: string
  post: string
}

const getBlogFiles = () => {
  var context = require.context("../pages/blog/articles", true, /\.md$/);
  var obj = {};
  context.keys().forEach(function (key) {
      obj[key] = context(key);
  });
  return obj;
}

export const getArticleList = (): Article[] => {
  const posts = getBlogFiles()
  const articles: Article[] = []
  for (let post in posts) {
    // todo: this ghetto af
    const sections = posts[post].split('---')
    const meta = sections[1]
    const body = sections[2]
    articles.push({
      title: meta.split(':')[1],
      path: `${BLOG_ROOT}/${post.replace('.md', '')}`,
      post: marked(body),
    })
  }
  return articles
}