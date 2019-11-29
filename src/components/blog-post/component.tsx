import * as React from 'react'
import { Page } from 'ak.gg/components/page'
import { Post } from 'ak.gg/pages/blog/content'
import { PostFooter, ViewSource } from 'ak.gg/components'
import { formatDate } from 'ak.gg/utils'
import './blog-post.scss'

export interface BlogPostProps {
  post: Post
}

const PostBanner = (props: BlogPostProps) => {
  const { post } = props
  return (
    <div className="post-banner">
      <div className="bg">{post.banner}</div>
      <div className="title">
        <h2>{post.title}</h2>
        <span>Posted on: {formatDate(post.date)}</span>
        {post.updated && (
          <span>
            <i>
              Updated on:{' '}
              <ViewSource source={post.pageSource}>
                {formatDate(post.updated)}
              </ViewSource>
            </i>
          </span>
        )}
      </div>
    </div>
  )
}

export const BlogPost: React.FC<BlogPostProps> = props => {
  const { post } = props
  return (
    <Page
      title={`blog - ${post.title}`}
      pageSource={post.pageSource}
      headerClassName="float"
      banner={<PostBanner post={post} />}
    >
      {post.content}
      <PostFooter title={post.title} currentPostPathname={post.pathname} />
    </Page>
  )
}
