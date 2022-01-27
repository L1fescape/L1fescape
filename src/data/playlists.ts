import * as playlistData from '../data/playlist-data.json'

export interface Playlist {
  title: string
  description: string
  emoji?: string
  url: string
  imageUrl: string
}

export const playlistIds: string[] = [
  'spotify:playlist:1EOj4DNc4LJD6ujTkFu6N7',
  'spotify:playlist:1IoSlQbiD7OZ7APX3tviuX',
  'spotify:playlist:0Qf5El4jvjpUnsJ4YZdTKo',

  'https://open.spotify.com/playlist/52MnZX7QxVTmL76e9eXrmK?si=4bb07212714549ea',
  'https://open.spotify.com/playlist/1MMqJT3c36EPJ0IYFo8DNn?si=71307ff6d9134cf4',
  'https://open.spotify.com/playlist/30iI7N8nbaTjuxO0C8cJbW?si=8c28560944a349d1',
]

export const playlists: Playlist[] = Object.values(playlistData.playlists)