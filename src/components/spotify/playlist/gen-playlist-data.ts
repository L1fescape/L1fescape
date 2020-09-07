import * as fs from 'fs'
import * as path from 'path'
import { getPlaylist, PlaylistData, playlistIDs } from './api'
import { refreshToken } from '../account'

export type PlaylistMap = { [key: string]: PlaylistData }

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
let token = process.env.SPOTIFY_TOKEN

async function genPlaylistData() {
  const newToken = await refreshToken(clientId, clientSecret, token)
  console.log(newToken)
  token = process.env.SPOTIFY_TOKEN = newToken

  const res = {} as PlaylistMap
  for (let i = 0; i < playlistIDs.length; i++) {
    const id = playlistIDs[i]
    const data = await getPlaylist(token, id)
    if (data) {
      res[id] = data
    }
  }

  if (Object.entries(res).length === 0) {
    return
  }

  await new Promise(resolve => {
    fs.writeFile(
      path.join(__dirname, 'playlist-data.json'),
      JSON.stringify(res),
      'utf8',
      () => {
        resolve()
      }
    )
  })
}

genPlaylistData()
