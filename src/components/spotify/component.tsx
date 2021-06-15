import * as React from 'react'
import { Playlist } from './playlist'
import './style.scss'

export const featuredPlaylistIDs = [
  'spotify:playlist:1EOj4DNc4LJD6ujTkFu6N7',
  'spotify:playlist:0Gm4bXeS0P3YJnDyEoH3KR',
  'spotify:playlist:1IoSlQbiD7OZ7APX3tviuX',
  'spotify:playlist:0Qf5El4jvjpUnsJ4YZdTKo',
]

export const Spotify = () => {
  return (
    <ul>
      {featuredPlaylistIDs.map(id => (
        <li key={id}>
          <Playlist id={id} />
        </li>
      ))}
    </ul>
  )
}
