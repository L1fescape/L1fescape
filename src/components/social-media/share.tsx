import * as React from 'react'
import { Links } from 'l1/components'
import { PlatformInfo, platformInfo } from './platforms'

export interface TwitterShareProps {
  title: string
  url: string
  user?: PlatformInfo
}

export const TwitterShare: React.FC<TwitterShareProps> = ({
  title,
  url,
  user = platformInfo.Twitter,
}) => {
  const tweetTitle = title.split(' ').join('+')
  const tweetUrl = `https://l1${encodeURIComponent(url)}`
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
