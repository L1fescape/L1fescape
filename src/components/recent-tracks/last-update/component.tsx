import * as React from 'react'
import * as lasfmTracks from '@/data/track-data.json'
import * as spofityPlaylists from '@/data/playlist-data.json'
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

function getLastUpdateTime(): number {
  const updates = [lasfmTracks, spofityPlaylists].map(d => d.updated)
  updates.sort((a, b) => b - a)
  return updates[0]
}

export const LastUpdate = () => {
  const time = getLastUpdateTime()
  const formattedTime = dayjs(time).format('MMMM D YYYY, h:mm:ss a')
  return (
    <span title={formattedTime}>{dayjs(time).fromNow()}</span>
  )
}
