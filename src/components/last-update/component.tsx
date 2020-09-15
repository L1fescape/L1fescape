import * as React from 'react'
import * as lasfmTracks from 'l1/components/lastfm/tracks/track-data.json'
import * as spofityPlaylists from 'l1/components/spotify/playlist/playlist-data.json'
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
    <>
      {'Last updated '}
      <span title={formattedTime}>{dayjs(time).fromNow()}</span>
    </>
  )
}
