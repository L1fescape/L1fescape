import * as React from 'react'
import * as History from 'history'
import { Link, RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom'
import { Header } from 'ak.gg/components/header'
import { getArticleList, Article } from 'ak.gg/utils/posts'
import './styles.scss'

export const POSTS_ROOT = '/posts'

export type Props = RouteComponentProps<{
  location: History.Location
}>

const getPostList = (articles: Article[]) => {
  return (
    <div>
      <p>
        Here are some things I've written:
      </p>
      {articles.sort((a, b) => +b.date - +a.date).map(post => (
        <div key={post.path}>
          <h3><Link to={post.path}>{post.title}</Link></h3>
          <p>{+post.date}</p>
        </div>
      ))}
    </div>
  )
}

const getPostPage = (article: Article) => {
  return (
    <div className="post">
      <h2>{article.title}</h2>
      <span>{`${article.date}`}</span>
      <div dangerouslySetInnerHTML={{ __html: article.post }} />
    </div>
  )
}

export const PostPresentation: React.StatelessComponent<Props> = (props: Props) => {
  const { pathname } = props.location
  const articles = getArticleList()
  const articleMap = articles.reduce((acc, a) => {
    acc[a.path] = a
    return acc
  }, {})
  return (
    <div>
      <Header />
      {articleMap[pathname] ? getPostPage(articleMap[pathname]) : getPostList(articles)}
    </div>
  )
}

export const Posts = withRouter(props => <PostPresentation {...props} />)