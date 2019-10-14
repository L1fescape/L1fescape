import * as React from 'react'
import { Accounts, Platforms, Links } from 'ak.gg/components/socials'

export interface PostFooterProps {
  title?: string
  url?: string
}

function getShareTwitter(
  title: string,
  url: string,
  twitterHandle: string,
  twitterUserID: string
) {
  const tweetTitle = title.split(' ').join('+')
  const tweetUrl = encodeURIComponent(url)
  const tweetShareLink = `https://twitter.com/intent/tweet?text=${tweetTitle}&amp;url=${tweetUrl}%2F&amp;via=${twitterHandle}`
  const twitterFollowLink = `https://twitter.com/intent/follow?user_id=${twitterUserID}`

  return (
    <>
      <h2>Share this post</h2>
      <p>
        {'If you liked this post please '}
        <Links.Twitter url={tweetShareLink}>{'share it'}</Links.Twitter>
        {' or follow '}
        <Links.Twitter url={twitterFollowLink}>
          {`@${twitterHandle} on Twitter`}
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/l1fescape"
        >
          DEV
        </a>
        .
      </p>
    </>,
  ]

  if (title && url) {
    const account = Accounts[Platforms.Twitter]
    sections.unshift(
      getShareTwitter(title, url, account.username, account.userID)
    )
  }

  return (
    <>
      {sections.map((section, index) => (
        <section key={index}>{section}</section>
      ))}
    </>
  )
}
