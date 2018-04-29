import * as React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'ak.gg/components/header'
import { getArticleList } from 'ak.gg/utils/blog'

export interface Props {}

export const Blog: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <div>
      <Header />
      Blag
      {getArticleList().map(post => <Link key={post.path} to={post.path}>{post.title}</Link>)}
    </div>
  )
}
