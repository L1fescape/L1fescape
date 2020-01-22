import * as React from 'react'
import { Links } from 'ak.gg/components'
import { Account, Accounts } from './accounts'
import { Platforms } from './platforms'

export interface TwitterShareProps {
  title: string
  url: string
  user?: Account
}

export const TwitterShare: React.FC<TwitterShareProps> = ({
  title,
  url,
  user = Accounts[Platforms.Twitter],
}) => {
  const tweetTitle = title.split(' ').join('+')
  const tweetUrl = `https://ak.gg${encodeURIComponent(url)}`
  const tweetShareLink = `https://twitter.com/intent/tweet?text=${tweetTitle}&url=${tweetUrl}&via=${user.username}`
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
