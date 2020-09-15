import * as React from 'react'
import * as lasfmTracks from 'l1/components/lastfm/tracks/track-data.json'
import * as spofityPlaylists from 'l1/components/spotify/playlist/playlist-data.json'
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

function getLastUpdateTime(): number {
  const updates = [lasfmTracks, spofityPlaylists]
  return updates.sort((a, b) => b.updated - a.updated)[0].updated
}

export const LastUpdate = () => {
  const time = getLastUpdateTime()
  return (
    <>
      Last updated{' '}
      <span title={dayjs(time).format('MMMM D YYYY, h:mm:ss a')}>
        {dayjs(time).fromNow()}
      </span>
    </>
  )
}
