import * as React from 'react'
import { BlogRoll, Links, ViewSource } from 'l1/components'
import { TwitterShare } from 'l1/components/social-media'
import { Post } from 'cms.l1'
import { formatDate } from 'l1/utils'
import './blog-post.scss'

export interface BlogPostProps {
  post: Post
}

interface FooterProps {
  title?: string
  currentPostPathname?: string
}

export const Banner: React.FC<BlogPostProps> = ({
  post: { banner, title, updated, pageSource, date },
}) => (
  <>
    <div className="post-banner">
      <div className="bg">{banner}</div>
      <div className="title">
        <h1>{title}</h1>
        {(updated && (
          <span>
            Updated on:{' '}
            <ViewSource source={pageSource}>{formatDate(updated)}</ViewSource>
          </span>
        )) || <span>Posted on: {formatDate(date)}</span>}
      </div>
    </div>
    <Links.blog>Back to all posts</Links.blog>
  </>
)

const Footer: React.FC<FooterProps> = ({ title, currentPostPathname }) => {
  const sections = [
    <>
      <h3>
        More from the <Links.blog>Blog</Links.blog>
      </h3>
      <BlogRoll currentPostPathname={currentPostPathname} />
    </>,
  ]

  if (title && currentPostPathname) {
    sections.unshift(<TwitterShare title={title} url={currentPostPathname} />)
  }

  return (
    <>
      {sections.map((section, index) => (
        <section key={index}>{section}</section>
      ))}
    </>
  )
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => (
  <>
    {post.content}
    <Footer title={post.title} currentPostPathname={post.path} />
  </>
)
