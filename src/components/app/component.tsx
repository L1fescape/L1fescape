import * as React from 'react'
import { Lastfm } from 'l1/components/lastfm'
import { Spotify } from 'l1/components/spotify'
import { SocialMedia } from 'l1/components/social-media'
import { LastUpdate } from 'l1/components/last-update'
import './style.scss'

// todo: pass as prop to cs component
process.env.API_ROOT = 'https://ak.gg/api/rest/v1'

export const App = () => (
  <div className="app">
    <section className="hi">
      <h2>hey! 👋 i'm andrew</h2>
      <p>i like 🎸 making music, 🛹 skateboarding, and 💻 programming</p>
    </section>

    <section className="playlists">
      <p>check some playlists i've been working on</p>
      <Spotify />
    </section>

    <section>
      <p>here are a few tracks i've been listening to a lot lately</p>
      <Lastfm />
    </section>

    {/* <section>
      <p>
        recently i've been working on hosting custom servers for the game cs:go
      </p>
      <CounterStrike />
    </section> */}

    <section className="socials">
      <p>you can find me elsewhere on the internet</p>
      <SocialMedia />
    </section>

    <section className="update">
      <p>
        <LastUpdate />
      </p>
    </section>
  </div>
)
