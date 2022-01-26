import * as React from 'react'

import { Icons } from '@/components/icons'
import { Tracklist } from '@/data/mixes'
import './style.scss'

interface Props {
  soundcloud?: string
  spotify?: string
  tracklist?: Tracklist
  description?: string
}

export const Mix: React.FC<Props> = ({
  soundcloud,
  spotify,
  tracklist = [],
  description,
}) => (
  <>
    {soundcloud && (
      <div className="soundcloud-embed">
        <iframe
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloud}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
        ></iframe>
      </div>
    )}
    {description && (
      <p>{description}</p>
    )}
    {spotify && (
      <p className="spotify-link">
        <span className="spotify"><Icons.Spotify /></span>
        <a
          target="_blank"
          href={`https://open.spotify.com/playlist/${spotify}`}
        >
          spotify playlist
        </a>
      </p>
    )}
    {tracklist?.length > 0 && false && (
      <>
        <p>
          tracklist:
        </p>
        <ol>
          {tracklist.map((song, idx) => (
            <li key={idx}>
              {song.track} - {song.artist}
            </li>
          ))}
        </ol>
      </>
    )}
  </>
)
