import * as React from 'react'
import { Link, Page, PostFooter, ViewSource } from 'ak.gg/components'
import { Post } from 'cms.ak.gg'
import { formatDate } from 'ak.gg/utils'
import './blog-post.scss'

export interface BlogPostProps {
  post: Post
}

export const Banner = (props: BlogPostProps) => {
  const { post } = props
  return (
    <>
      <div className="post-banner">
        <div className="bg">{post.banner}</div>
        <div className="title">
          <h2>{post.title}</h2>
          {(post.updated && (
            <span>
              Updated on:{' '}
              <ViewSource source={post.pageSource}>
                {formatDate(post.updated)}
              </ViewSource>
            </span>
          )) || <span>Posted on: {formatDate(post.date)}</span>}
        </div>
      </div>
      <Link to="/blog">Back to all posts</Link>
    </>
  )
}

interface FooterProps {
  title?: string
  currentPostPathname?: string
}

const Footer = (props: FooterProps) => {
  const { title, currentPostPathname } = props

  const sections = [
    <>
      <h3>
        More from the <Link to={PagesMap.Blog.path}>Blog</Link>
      </h3>
      <BlogRoll currentPostPathname={currentPostPathname} />
    </>,
    <>
      <h3>Subscribe</h3>
      <p>
        {'To keep up with posts on this blog, you can '}
        <Links.RSS />
        {' or follow me on '}
        <Links.DEV />.
      </p>
    </>,
  ]

  if (title && currentPostPathname) {
    sections.unshift(getShareTwitter(title, currentPostPathname))
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
  <Page
    title={`blog - ${post.title}`}
    pageSource={post.pageSource}
    headerClassName="float"
    banner={<Banner post={post} />}
  >
    {post.content}
    <PostFooter title={post.title} currentPostPathname={post.path} />
  </Page>
)
