import * as React from 'react'
import { Lastfm } from 'l1/components/lastfm'
import { Spotify } from 'l1/components/spotify'
import { SocialMedia } from 'l1/components/social-media'
import './style.scss'

const playlists = [
  {
    link:
      'https://open.spotify.com/playlist/1nFbRcvSU0Qv81uW6XOxQo?si=wSPodijySmeTMh05FTXxlA',
  },
]

export const App = () => (
  <div className="app">
    <section className="hi">
      <h2>hey! 👋 i'm andrew</h2>
      <p>
        i like 🎸 making music, 🛹 skateboarding, and 💻 creating things with
        code
      </p>
    </section>

    <section>
      <p>here a couple playlists i've been working on</p>
      <Spotify />
    </section>

    <section>
      <p>and a few songs i've been obsessing over</p>
      <Lastfm />
    </section>

    <section className="socials">
      <p>you can find me elsewhere on the internet</p>
      <SocialMedia />
    </section>
  </div>
)
