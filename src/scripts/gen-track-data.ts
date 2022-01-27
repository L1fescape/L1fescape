import * as fs from 'fs'
import * as path from 'path'
import { getTracks } from '../api/lastfm/api'

const apikey = process.env.LASTFM_KEY

async function genTrackData() {
  const tracks = await getTracks(apikey)

  if (Object.entries(tracks).length === 0) {
    console.log('no lastfm data')
    return
  }

  await new Promise(resolve => {
    const data = {
      tracks,
      updated: Date.now(),
    }
    fs.writeFile(
      path.join(__dirname, '../data', 'track-data.json'),
      JSON.stringify(data),
      'utf8',
      () => {
        resolve(true)
      }
    )
  })
}

genTrackData()
