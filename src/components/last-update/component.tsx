import * as React from 'react'
import * as lasfmTracks from 'l1/components/lastfm/tracks/track-data.json'
import * as spofityPlaylists from 'l1/components/spotify/playlist/playlist-data.json'
import * as moment from 'moment'

function getLastUpdateTime(): number {
  const updates = [lasfmTracks, spofityPlaylists]
  return updates.sort((a, b) => b.updated - a.updated)[0].updated
}

export const LastUpdate = () => (
  <>
    Last updated{' '}
    <span title={moment(getLastUpdateTime()).format('MMMM Do YYYY, h:mm:ss a')}>
      {moment(getLastUpdateTime()).fromNow()}
    </span>
  </>
)
