import * as React from 'react'
import { Lastfm } from 'l1/components/lastfm'
import { Spotify } from 'l1/components/spotify'
import { SocialMedia } from 'l1/components/social-media'
import { LastUpdate } from 'l1/components/last-update'
import { Mix } from 'l1/components/mix'
import './style.scss'

const Sparkle = () => {
  return (
    <div className="sparkle">
      <div className="moon">🌙</div>
      <div className="stars">
        <div>✨</div>
        <div>✨</div>
        <div>✨</div>
      </div>
    </div>
  )
}

const m1Tracklist = [
  {
    track: 'Terrain: III',
    artist: 'Portico Quartet',
  },
  {
    track: 'Sister (Floating Points Remix)',
    artist: 'Caribou',
  },
  {
    track: 'Reserve Parachute',
    artist: 'Dark Sky',
  },
  {
    track: 'Unity',
    artist: 'Phaeleh',
  },
  {
    track: 'Balearic Incarnation',
    artist: 'Dolle Jolle',
  },
  {
    track: 'Nomad',
    artist: 'Tor',
  },
  {
    track: 'Debold',
    artist: 'Vegyn',
  },
  {
    track: 'heal',
    artist: 'ICO',
  },
]

export const App = () => (
  <div className="app">
    <section className="hi">
      <h2>Hey! 👋 I'm Andrew</h2>
      <p>I like 🎸 making music, 🛹 skateboarding, and 💻 programming</p>
    </section>

    <section className="playlists">
      <p>Check some playlists I've been working on:</p>
      <Spotify />
    </section>

    <section>
      <p>
        I recorded a mix of a few tunes I listened to a lot in the month of May
        2021.
      </p>
      <Mix
        soundcloudId="1053816040"
        spotifyId="5443H4ZhAWa94tbegE93ap"
        tracklist={m1Tracklist}
      />
    </section>

    <section>
      <p>These are a few tracks I've been listening to a lot lately</p>
      <Lastfm />
    </section>

    <section className="socials">
      <p>You can find me elsewhere on the internet</p>
      <SocialMedia />
    </section>

    <section className="update">
      <p>
        <LastUpdate />
      </p>
    </section>
  </div>
)
