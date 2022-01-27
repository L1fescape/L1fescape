import * as React from 'react'

import { Playlist as PlaylistType } from '@/data/playlists'
import './style.scss'

export interface PlaylistProps {
  playlist: PlaylistType
}

export const Playlist: React.FC<PlaylistProps> = ({ playlist }) => {
  const { title, description, url, imageUrl } = playlist
  return (
    <div className="playlist">
      <div className="art">
        <a href={url}>
          <img src={imageUrl} />
        </a>
      </div>
      <div className="info">
        <a href={url}>
          <span>{title}</span>
        </a>
        <p>{description}</p>
      </div>
    </div>
  )
}