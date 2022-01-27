import * as React from 'react'
import * as playlistData from '@/data/playlist-data.json'
import { PlaylistMap } from '@/scripts/gen-playlist-data'

const playlistMap: PlaylistMap = playlistData.playlists

export const Spotify: React.FC<{ id: string }> = ({ id }) => {
  const playlist = playlistMap[id]
  if (!playlist) {
    return null
  }
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
