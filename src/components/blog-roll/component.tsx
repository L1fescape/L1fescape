import * as React from 'react'
import { Link } from 'react-router-dom'
import { Posts } from 'cms.l1'
import { formatDate } from 'l1/utils'
import { Links } from '../links'

export interface BlogRollProps {
  currentPostPathname?: string
  limit?: number
}

export const BlogRoll: React.FC<BlogRollProps> = ({
  limit,
  currentPostPathname,
}) => {
  let posts = Posts
  let showMore = false
  if (limit !== undefined && limit < posts.length) {
    posts = posts.slice(0, limit)
    showMore = true
  }
  return (
    <>
      {posts.map(post => {
        if (post.path === currentPostPathname) {
          return null
        }
        return (
          <div key={post.path}>
            <h2>
              <Link key={post.path} to={post.path}>
                {post.title}
              </Link>
            </h2>
            <br />
            <small>{formatDate(post.date)}</small>
          </div>
        )
      })}
      {showMore && <Links.blog>See all blog posts</Links.blog>}
    </>
  )
}
