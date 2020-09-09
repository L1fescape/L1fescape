import * as React from 'react'
import { Playlist, playlistIDs } from './playlist'
import './style.scss'

export const Spotify = () => {
  return (
    <ul>
      {playlistIDs.map(id => (
        <li key={id}>
          <Playlist id={id} />
        </li>
      ))}
    </ul>
  )
}
