import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Tracks } from '@/components/recent-tracks'
import { Playlist } from '@/components/playlist'
import { SocialMedia, GithubLink } from '@/components/social-media'
import { LastUpdate } from '@/components/recent-tracks/last-update'
import { Icons } from '@/components/icons'
import { DAW } from '@/components/daw'
import { Mix } from '@/components/mix'
import { Posts } from '@/components/posts'
import { mixes } from '@/data/mixes'
import { playlists } from '@/data/playlists'
import './style.scss'

export const App = () => (
  <div className="home">
    <section className="hi">
      <div className="pic">
        <img className="profile" src="/img/profile.jpg" />
      </div>
      <div className="blurb">
        <h2>hi! i'm andrew</h2>
        <p>
          i'm a programmer currently living in berlin. i really enjoy music and
          software. here on my website you'll find some{' '}
          <AnchorLink href="#playlists">spotify playlists</AnchorLink> with
          music i like,{' '}
          <AnchorLink href="#soundcloud">soundcloud links</AnchorLink> to sets
          i've mixed,{' '}
          <AnchorLink href="#lastfm">
            tracks i've been listening to lately
          </AnchorLink>{' '}
          via last.fm, and a couple of my other projects. i post content here
          when i can but some playlists i update frequently, so check back for
          updates!
        </p>
        <p>
          you can also find me elsewhere on the internet{' '}
          <span className="arrow-icon">
            <Icons.Arrow />
          </span>
        </p>
        <div className="socials">
          <SocialMedia />
        </div>
      </div>
    </section>

    <section className="music">
      <div className="title">
        <h2>music</h2>
      </div>
      <div className="content grid">
        <div id="playlists" className="playlists">
          <h3>playlists</h3>
          <p>
            these are a few spotify playlists i've made with tunes i really
            like. check 'em out if you're looking for some music to groove to.
          </p>
          <ul>
            {playlists.map(playlist => (
              <li key={playlist.url}>
                <Playlist playlist={playlist} />
              </li>
            ))}
          </ul>
        </div>

        <div id="soundcloud" className="mixes">
          <h3>mixes & live sets</h3>
          <ul>
            {mixes.map(mix => (
              <li key={mix.soundcloud}>
                <Mix mix={mix} />
              </li>
            ))}
          </ul>
        </div>

        <DAW />

        <div id="lastfm" className="recent-tracks">
          <h3>what i've been listening to recently</h3>
          <p>a few tunes that have been hitting my ears a lot recently*:</p>
          <Tracks />
          <p>
            * last updated{' '}
            <GithubLink
              url="https://github.com/L1fescape/L1fescape.com/actions/workflows/data.yml"
              noIcon
            >
              <LastUpdate />
            </GithubLink>
          </p>
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

    <section className="posts">
      <div className="title">
        <h2>posts</h2>
      </div>
      <div className="content grid">
        <Posts />
      </div>
    </section>

    <section className="source">
      <div className="title">
        <h2>source</h2>
      </div>
      <div className="content">
        <p>this site is built using</p>
        <ul>
          <li>frontend: typescript, react, sass, webpack</li>
          <li>ci/cd: github actions, netlify</li>
          <li>cdn: cloudflare</li>
        </ul>
        <p>
          you can view the source code{' '}
          <GithubLink url="https://github.com/l1fescape/l1fescape.com">
            on github
          </GithubLink>
          .
        </p>
      </div>
    </section>
  </div>
)
