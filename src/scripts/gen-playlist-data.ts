import * as fs from 'fs'
import * as path from 'path'
import { decode } from 'he'

import { getPlaylist, PlaylistData } from '../api/spotify/playlist'
import { playlistIds, Playlist } from '../data/playlists'
import { refreshToken } from '../api/spotify'

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
  for (let i = 0; i < playlistIds.length; i++) {
    const id = playlistIds[i]
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
      path.join(__dirname, '../data/', 'playlist-data.json'),
      JSON.stringify(data),
      'utf8',
      () => {
        resolve(undefined)
      }
    )
  })
}

genPlaylistData()
