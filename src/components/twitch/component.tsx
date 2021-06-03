import * as React from 'react'
import { useEffect, useState } from 'react'
import './style.scss'
import { getStream, TwitchStream } from './stream'
// import { refreshToken } from 'l1/utils/refresh-token'

let token = process.env.TWITCH_TOKEN
const clientID = process.env.TWITCH_CLIENT_ID

export const Twitch = () => {
  const [stream, setStream] = useState<TwitchStream>()

  useEffect(() => {
    async function checkIsLive() {
      // token = await refreshToken(oauthUrl, clientID, clientSecret, token)
      const stream = await getStream(token, clientID, '21231191')
      if (stream && stream.isLive) {
        console.log(stream)
        setStream(stream)
      }
    }
    checkIsLive()
  }, [])

  if (!stream) {
    return null
  }
  return (
    <div className="twitch">
      <p>i'm currently streaming live on twitch!</p>
      <p>🔴 {stream.title}</p>
      <a href={stream.url}>
        <img src={stream.thumbnailUrl} />
      </a>
    </div>
  )
}
