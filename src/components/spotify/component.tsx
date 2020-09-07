import * as React from 'react'
import { Playlist, playlistIDs } from './playlist'
import './style.scss'

export const Spotify = () => {
  return (
    <div className="playlists">
      {playlistIDs.map(id => (
        <Playlist id={id} key={id} />
      ))}
    </div>
  )
}
