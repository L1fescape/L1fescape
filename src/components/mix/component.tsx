import * as React from 'react'

import { Mix as MixType } from '@/data/mixes'
import './style.scss'
import { SoundcloudLink, SpotifyLink } from '../social-media'

interface Props {
  mix: MixType
}

export const Mix: React.FC<Props> = ({
  mix: {
    url,
    soundcloud,
    spotify,
    tracklist,
    description,
  }
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
    {url && (
      <p><SoundcloudLink url={url}>listen on soundcloud</SoundcloudLink></p>
    )}
    {spotify && (
      <p>
        <SpotifyLink url={`https://open.spotify.com/playlist/${spotify}`}>spotify playlist</SpotifyLink>
      </p>
    )}
    {tracklist?.length > 0 && (
      <>
        <p>
          view tracklist
        </p>
        <ol className='tracklist'>
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
