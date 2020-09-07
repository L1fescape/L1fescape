import * as fs from 'fs'
import * as path from 'path'
import { getTracks } from './api'

const apikey = process.env.LASTFM_KEY

async function genTrackData() {
  const res = await getTracks(apikey)

  await new Promise(resolve => {
    fs.writeFile(
      path.join(__dirname, 'track-data.json'),
      JSON.stringify(res),
      'utf8',
      () => {
        resolve()
      }
    )
  })
}

genTrackData()
