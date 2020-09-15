import * as React from 'react'
import * as lasfmTracks from 'l1/components/lastfm/tracks/track-data.json'
import * as spofityPlaylists from 'l1/components/spotify/playlist/playlist-data.json'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

function getLastUpdateTime(): number {
  const updates = [lasfmTracks, spofityPlaylists]
  return updates.sort((a, b) => b.updated - a.updated)[0].updated
}

export const LastUpdate = () => (
  <>
    Last updated{' '}
    <span title={dayjs(getLastUpdateTime()).format('MMMM Do YYYY, h:mm:ss a')}>
      {dayjs(getLastUpdateTime()).fromNow()}
    </span>
  </>
)
