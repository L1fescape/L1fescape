import * as React from 'react'
import * as lasfmLastUpdate from 'l1/components/lastfm/tracks/last-updated.json'
import * as spofityLastUpdate from 'l1/components/spotify/playlist/last-updated.json'
import * as moment from 'moment'

function getLastUpdateTime(): number {
  const updates = [lasfmLastUpdate, spofityLastUpdate]
  return updates.sort((a, b) => b.time - a.time)[0].time
}

export const LastUpdate = () => (
  <>
    Last updated{' '}
    <span title={moment(getLastUpdateTime()).format('MMMM Do YYYY, h:mm:ss a')}>
      {moment(getLastUpdateTime()).fromNow()}
    </span>
  </>
)
