import * as React from 'react'

import { LastfmData } from '@/api/lastfm/api'
import * as trackData from '@/data/track-data.json'
import './style.scss'

const data: LastfmData = trackData?.tracks

export const Tracks = () => {
  if (!data || !Object.entries(data).length) {
    return null
  }
  return (
    <ul className='tracks'>
      {data.toptracks.track.map(track => (
        <li key={track.url}>
          {track.name} - {track.artist.name} <a className="small" href={track.url}>last.fm</a>
        </li>
      ))}
    </ul>
  )
}