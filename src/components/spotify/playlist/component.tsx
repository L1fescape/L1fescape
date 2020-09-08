import * as React from 'react'
import * as playlistData from './playlist-data.json'
import { PlaylistMap } from './gen-playlist-data'

const playlistMap = playlistData as PlaylistMap

export const Playlist: React.FC<{ id: string }> = ({ id }) => {
  const data = playlistMap[id]
  if (!data) {
    return null
  }
  return (
    <div className="playlist">
      <a href={data.external_urls.spotify}>
        <img src={data.images.sort((a, b) => b.height - a.height)[0].url} />
        <p>{data.name}</p>
      </a>
    </div>
  )
}
