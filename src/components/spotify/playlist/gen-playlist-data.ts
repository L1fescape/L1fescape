import * as fs from 'fs'
import * as path from 'path'
import { getPlaylist, PlaylistData, playlistIDs } from './api'

export type PlaylistMap = { [key: string]: PlaylistData }

const token = process.env.SPOTIFY_TOKEN

async function genPlaylistData() {
  const res = {} as PlaylistMap
  for (let i = 0; i < playlistIDs.length; i++) {
    const id = playlistIDs[i]
    res[id] = await getPlaylist(token, id)
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
