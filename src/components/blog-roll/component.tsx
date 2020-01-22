import * as React from 'react'
import { Link } from 'react-router-dom'
import { Posts } from 'cms.ak.gg'
import { formatDate } from 'ak.gg/utils'

export interface BlogRollProps {
  currentPostPathname?: string
}

export const BlogRoll = (props: BlogRollProps) => {
  return (
    <>
      {Posts.map(post => {
        if (post.path === props.currentPostPathname) {
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
    </>
  )
}
