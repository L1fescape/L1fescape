import * as React from 'react'
import * as History from 'history'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { Page } from 'ak.gg/components/page'
import { getArticleList, articleReducer, Article } from './utils/posts'
import './styles.scss'

const articles = getArticleList()

const ArticlePresentation = (props: { articles: Article[] }) => (
  <div>
    <p>
      Here are some things I've written:
    </p>
    {props.articles.map(article => (
      <div key={article.path} className="post-summary">
        <h3><Link to={article.path}>{article.title}</Link></h3>
        <span className="date">{`${article.date}`}</span>
      </div>
    ))}
  </div>
)
export const ArticleList = () => <ArticlePresentation articles={articles} />

const Post = (props: { article: Article }) => (
  <div className="post">
    <h1>{props.article.title}</h1>
    <span className="date">{`${props.article.date}`}</span>
    <div className="body" dangerouslySetInnerHTML={{ __html: props.article.post }} />
  </div>
)

export type PublicProps = RouteComponentProps<{
  location: History.Location
}>

const PostPresentation: React.StatelessComponent<PublicProps> = (props: PublicProps) => {
  const { pathname } = props.location
  const article = articles.reduce(articleReducer, {})[pathname]
  const Layout = article && article.layout || Page
  return (
    <Layout>
      {article ? <Post article={article} /> : <ArticleList />}
    </Layout>
  )
}
export const Posts = withRouter(props => <PostPresentation {...props} />)