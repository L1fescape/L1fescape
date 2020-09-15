import * as React from 'react'
import * as trackData from './track-data.json'
import { LastfmData } from './api'

const data: LastfmData = trackData.tracks

export const Tracks = () => {
  if (!data || Object.entries(data).length === 0) {
    return null
  }
  return (
    <ul>
      {data.toptracks.track.map(track => (
        <li key={track.url}>
          🎶 {track.name} - {track.artist.name} <a href={track.url}>last.fm</a>
        </li>
      ))}
    </ul>
  )
}
