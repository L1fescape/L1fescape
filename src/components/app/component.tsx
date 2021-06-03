import * as React from 'react'
import { Lastfm } from 'l1/components/lastfm'
import { Spotify } from 'l1/components/spotify'
import { SocialMedia } from 'l1/components/social-media'
import { LastUpdate } from 'l1/components/last-update'
import { Twitch } from 'l1/components/twitch'
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
      <p>
        i recorded a mix of a few tunes i listened to a lot in the month of may
        2021. you can listen to it here:
      </p>
      <div className="soundcloud-embed">
        <iframe
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1053816040&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
        ></iframe>
      </div>
    </section>

    <section>
      <p>here are a few tracks i've been listening to a lot lately</p>
      <Lastfm />
    </section>

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
