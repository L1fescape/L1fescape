import * as React from 'react'
import { BlogPost } from 'ak.gg/components/blog-post'
import { Page } from 'ak.gg/components/page'
import { BlogRoll } from 'ak.gg/components/blog-roll'
import { RouteComponentProps, withRouter } from 'react-router'
import { Posts } from './content'
import './styles.scss'

type Props = RouteComponentProps<{
  postID: string
}>

export const BlogComponent = (props: Props) => {
  const { postID } = props.match.params
  const post = Posts.find(post => props.location.pathname === post.pathname)

  if (post) {
    return <BlogPost post={post} />
  }

  return (
    <Page title="blog" pageSource={__filename}>
      <div className="blog-container">
        {postID && 'post not found'}
        <BlogRoll />
      </div>
    </Page>
  )
}

export const Blog = withRouter(BlogComponent)
