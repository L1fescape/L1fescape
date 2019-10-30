import * as React from 'react'
import { Account, Accounts, Platforms, Links } from 'ak.gg/components/socials'

export interface PostFooterProps {
  title?: string
  url?: string
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
        <Links.Twitter url={tweetShareLink}>{'share it'}</Links.Twitter>
        {' or follow '}
        <Links.Twitter url={twitterFollowLink}>
          {`@${user.username} on Twitter`}
        </Links.Twitter>
        .
      </p>
    </>
  )
}

export const PostFooter = (props: PostFooterProps) => {
  const { title, url } = props

  const sections = [
    <>
      <h2>Subscribe</h2>
      <p>
        {'To keep up with posts on this blog, you can '}
        <Links.RSS />
        {' or follow me on '}
        <Links.DEV />.
      </p>
    </>,
  ]

  if (title && url) {
    sections.unshift(getShareTwitter(title, url))
  }

  return (
    <>
      {sections.map((section, index) => (
        <section key={index}>{section}</section>
      ))}
    </>
  )
}
