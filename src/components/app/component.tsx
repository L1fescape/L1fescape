import * as React from 'react'

import { Tracks } from '@/components/recent-tracks'
import { Playlist } from '@/components/playlist'
import { SocialMedia } from '@/components/social-media'
import { LastUpdate } from '@/components/recent-tracks/last-update'
import { Icons } from '@/components/icons'
import { Mix } from '@/components/mix'
import { m1Tracklist, Mix as MixType } from '@/data/mixes'
import './style.scss'

export const playlistIDs: string[] = [
  'spotify:playlist:1EOj4DNc4LJD6ujTkFu6N7',
  'spotify:playlist:0Gm4bXeS0P3YJnDyEoH3KR',
  'spotify:playlist:1IoSlQbiD7OZ7APX3tviuX',
  'spotify:playlist:0Qf5El4jvjpUnsJ4YZdTKo',

  'https://open.spotify.com/playlist/5ywVhKummH20oqmvVDaSpm?si=d995ff38c4294b8e',
]

export const mixes: MixType[] = [{
  title: 'm1',
  tracklist: m1Tracklist,
  soundcloud: '1053816040',
  spotify: '544H4ZhAWa94tbegE93ap',
  description: 'i recorded a mix of a few tunes i listened to a lot in the month of may 2021.',
}, {
  title: 'm2',
  soundcloud: '1155198274',
  spotify: '2VxPeV9cgCmiIAQfDouQ7T',
}, {
  title: 'moongate',
  soundcloud: '1155198274',
  spotify: '2VxPeV9cgCmiIAQfDouQ7T',
}]

export const App = () => (
  <div className="home">
    <section className="hi">
      <div className="pic">
        <img className="profile" src="/img/profile.jpg" />
      </div>
      <div className="blurb">
        <h2>hi! i'm andrew</h2>
        <p>i'm a programmer currently living in berlin. i really enjoy music and software. here on my website you'll find some spotify playlists with music i like, soundcloud links to sets i've mixed, tracks i've been listening to lately via last.fm, and a couple of my other projects. i post content here when i can but some playlists i update frequently, so check back for updates!</p>
        <p>you can also find me elsewhere on the internet, should you be so inclined <span className="arrow-icon"><Icons.Arrow /></span></p>
        <div className="socials">
          <SocialMedia />
        </div>
      </div>
    </section>

    <section className="music">
      <div className="title"><h2>music</h2></div>
      <div className="content grid">
        <div className="playlists">
          <h3>playlists</h3>
          <p>these are a few spotify playlists i've made with tunes i really like. check em out if you're looking for some music to groove to.</p>
          <ul>
            {playlistIDs.map(id => (
              <li key={id}><Playlist id={id} /></li>
            ))}
          </ul>
        </div>

        <div className="mixes">
          <h3>mixes & live sets</h3>
          <ul>
            {mixes.map(mix => (
              <li key={mix.soundcloud}>
                <Mix
                  soundcloud={mix.soundcloud}
                  description={mix.description}
                  spotify={mix.spotify}
                  tracklist={mix.tracklist}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className='recent-tracks'>
          <h3>what i've been listening to recently</h3>
          <p>a few tunes that have been hitting my ears a lot this past week*:</p>
          <Tracks />
          <p>* <span className="small">last updated <a href="https://github.com/L1fescape/L1fescape.com/actions/workflows/data.yml" target="_blank"><LastUpdate /></a></span></p>
        </div>
      </div>
    </section>

    {/* <section className="code">
      <div className="title"><h2>projects</h2></div>
      <div className="content grid">
        <div>
          <h3>blanqslate.fm</h3>
        </div>
      </div>
    </section> */}

    <section className="source">
      <div className="title"><h2>source</h2></div>
      <div className="content">
        <p>view the source code for this website <a href="https://github.com/l1fescape/l1fescape.com" target="_blank">on github</a>.</p>
      </div>
    </section>
  </div>
)
