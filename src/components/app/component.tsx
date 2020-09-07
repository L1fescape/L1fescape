import * as React from 'react'
import { SocialMedia } from 'l1/components/social-media'
import './style.scss'

interface Song {
  title: string
  artist: string | string[]
  spotify: string
}

const songs: Song[] = [
  {
    title: 'ghosts (feat. hana)',
    artist: ['tchami, hana'],
    spotify: 'https://open.spotify.com/track/5LGEEhT48ta9X8vHGCzwby',
  },
  {
    title: 'house arrest',
    artist: ['sofi tukker', 'gorgon city'],
    spotify: 'https://open.spotify.com/track/5LGEEhT48ta9X8vHGCzwby',
  },
  {
    title: 'fuzzwar',
    artist: 'daniel avery',
    spotify: 'https://open.spotify.com/track/1txulnjmojCRvbgl0ub5qB',
  },
]

function formatArtist(artist: string | string[]) {
  return typeof artist === 'object' ? artist.join(', ') : artist
}

export const App = () => (
  <div className="app">
    <section className="hi">
      <p>hey! 👋 i'm andrew</p>
    </section>

    <section>
      <p>
        i like 🎸 making music, 🛹 skateboarding, and 💻 creating things with
        code
      </p>
    </section>

    <section>
      <p>here's what i've been listening to lately:</p>
      <ul>
        {songs.map(song => (
          <li>
            {song.title} - {formatArtist(song.artist)}{' '}
            <a href={song.spotify}>spotify</a>
          </li>
        ))}
      </ul>
    </section>

    <section className="socials">
      <p>you can find me elsewhere on the internet:</p>
      <SocialMedia />
    </section>
  </div>
)
