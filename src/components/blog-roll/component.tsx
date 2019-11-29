import * as React from 'react'
import { Link } from 'react-router-dom'
import { Posts } from 'ak.gg/pages/blog/content'
import { formatDate } from 'ak.gg/utils'

export interface BlogRollProps {
  currentPostPathname?: string
}

export const BlogRoll = (props: BlogRollProps) => {
  return (
    <>
      {Posts.map(post => {
        if (post.pathname === props.currentPostPathname) {
          return null
        }
        return (
          <div key={post.pathname}>
            <Link key={post.pathname} to={post.pathname}>
              {post.title}
            </Link>
            <br />
            <small>{formatDate(post.date)}</small>
          </div>
        )
      })}
    </>
  )
}
