import * as React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from 'ak.gg/routes'
import { BlogRoll } from 'ak.gg/components/blog-roll'
import { Account, Accounts, Platforms, Links } from 'ak.gg/components/socials'

export interface PostFooterProps {
  title?: string
  currentPostPathname?: string
}

function getShareTwitter(
  title: string,
  url: string,
  user: Account = Accounts[Platforms.Twitter]
) {
  const tweetTitle = title.split(' ').join('+')
  const tweetUrl = encodeURIComponent(url)
  const tweetShareLink = `https://twitter.com/intent/tweet?text=${tweetTitle}&amp;url=${tweetUrl}%2F&amp;via=${user.username}`
  const twitterFollowLink = `https://twitter.com/intent/follow?user_id=${user.userID}`

  return (
    <>
      <h2>Share this post</h2>
      <p>
        {'If you liked this post please '}
        <Links.Twitter to={tweetShareLink}>{'share it'}</Links.Twitter>
        {' or follow '}
        <Links.Twitter to={twitterFollowLink}>
          {`@${user.username} on Twitter`}
        </Links.Twitter>
        .
      </p>
    </>
  )
}

export const PostFooter = (props: PostFooterProps) => {
  const { title, currentPostPathname } = props

  const sections = [
    <>
      <h3>
        More from the <Link to={Routes.Blog.path}>Blog</Link>
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
