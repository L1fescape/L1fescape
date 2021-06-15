import * as fs from 'fs'
import * as path from 'path'
import { decode } from 'he'

import { getPlaylist, PlaylistData } from './api'
import { refreshToken } from '../account'

const playlistIDs: string[] = [
  'spotify:playlist:1EOj4DNc4LJD6ujTkFu6N7',
  'https://open.spotify.com/playlist/19x8zn8rBoAzl0EEciH14w?si=1uNY_xZFQxK8iOXeIYlLfg',
  'spotify:playlist:1IoSlQbiD7OZ7APX3tviuX',
  'spotify:playlist:0Qf5El4jvjpUnsJ4YZdTKo',
  'spotify:playlist:0Gm4bXeS0P3YJnDyEoH3KR',

  'spotify:playlist:5443H4ZhAWa94tbegE93ap',
]

export interface Playlist {
  title: string
  description: string
  emoji?: string
  url: string
  imageUrl: string
}

function parseDescription(desc: string): string {
  return decode(desc)
}

function parsePlaylist(data: PlaylistData): Playlist {
  return {
    title: data.name,
    description: parseDescription(data.description),
    url: data.external_urls.spotify,
    imageUrl: data.images.sort((a, b) => b.height - a.height)[0].url,
  }
}

export type PlaylistMap = { [key: string]: Playlist }

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
let token = process.env.SPOTIFY_TOKEN

async function genPlaylistData() {
  token = await refreshToken(clientId, clientSecret, token)

  const playlists = {} as PlaylistMap
  for (let i = 0; i < playlistIDs.length; i++) {
    const id = playlistIDs[i]
    const data = await getPlaylist(token, id)
    if (data) {
      playlists[id] = parsePlaylist(data)
    }
  }

  if (Object.entries(playlists).length === 0) {
    console.log('no spotify data')
    return
  }

  await new Promise(resolve => {
    const data = {
      playlists,
      updated: Date.now(),
    }
    fs.writeFile(
      path.join(__dirname, 'playlist-data.json'),
      JSON.stringify(data),
      'utf8',
      () => {
        resolve(undefined)
      }
    )
  })
}

genPlaylistData()
