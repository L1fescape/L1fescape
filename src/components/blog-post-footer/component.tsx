import * as React from 'react'
import { Accounts, Platforms } from 'ak.gg/components/social'

export interface PostFooterProps {
  title?: string
  url?: string
}

function getShareTwitter(title: string, url: string, twitterHandle: string, twitterUserID: string) {
  const tweetTitle = title.split(" ").join("+")
  const tweetUrl = encodeURIComponent(url)
  
  return (
    <>
      <h2>Share this post</h2>
      <p>
        If you liked this post please <a href={`https://twitter.com/intent/tweet?text=${tweetTitle}&amp;url=${tweetUrl}%2F&amp;via=${twitterHandle}`} rel="noopener noreferrer" target="_blank">share it</a> or follow <a href={`https://twitter.com/intent/follow?user_id=${twitterUserID}`} rel="noopener noreferrer" target="_blank">@{twitterHandle} on Twitter</a>.
      </p>
    </>
  )
}

export const PostFooter = (props: PostFooterProps) => {
  const { title, url } = props

  const sections = [(
    <>
      <h2>Subscribe</h2>
      <p>To keep up with posts on this blog, you can <a target="_blank" href="/feed.xml">subscribe via RSS</a> or follow me on <a target="_blank" rel="noopener noreferrer" href="https://dev.to/l1fescape">DEV</a>.</p>
    </>
  )]

  if (title && url) {
    const account = Accounts[Platforms.Twitter]
    sections.unshift(getShareTwitter(title, url, account.username, account.userID))
  }

  return (
    <>
      { sections.map((section, index) => (
        <section key={index}>
          {section}
        </section>
      )) }
    </>
  )
}