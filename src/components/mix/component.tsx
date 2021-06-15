import * as React from 'react'
import { Playlist } from 'l1/components/spotify'
import './style.scss'

export interface Track {
  artist: string
  track: string
}

interface Props {
  soundcloudId?: string
  spotifyId?: string
  tracklist: Track[]
}

export const Mix: React.FC<Props> = ({
  soundcloudId,
  spotifyId,
  tracklist,
}) => (
  <>
    {soundcloudId && (
      <div className="soundcloud-embed">
        <iframe
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudId}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
        ></iframe>
      </div>
    )}
    {spotifyId && (
      <p>
        You can also listen to the{' '}
        <a
          target="_blank"
          href={`https://open.spotify.com/playlist/${spotifyId}`}
        >
          playlist on Spotify
        </a>
        . Here's the tracklist:
      </p>
    )}
    <ol>
      {tracklist.map((song, idx) => (
        <li key={idx}>
          {song.track} - {song.artist}
        </li>
      ))}
    </ol>
  </>
)
