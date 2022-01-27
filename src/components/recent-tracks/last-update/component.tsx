import * as React from 'react'
import * as lastfmTracks from '@/data/track-data.json'
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const LastUpdate = () => {
  const time = dayjs(lastfmTracks.updated)
  return (
    <span title={time.format('MMMM D YYYY, h:mm:ss a')}>
      {time.fromNow()}
    </span>
  )
}
