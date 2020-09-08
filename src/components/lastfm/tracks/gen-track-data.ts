import * as fs from 'fs'
import * as path from 'path'
import * as moment from 'moment'
import { getTracks, LastfmData } from './api'
import * as trackData from './track-data.json'

const apikey = process.env.LASTFM_KEY

const data = trackData as LastfmData

async function genTrackData() {
  const res = await getTracks(apikey)

  if (Object.entries(res).length === 0) {
    console.log('no lastfm data')
    return
  }

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

  await new Promise(resolve => {
    fs.writeFile(
      path.join(__dirname, 'last-updated.json'),
      JSON.stringify({ time: moment.now() }),
      'utf8',
      () => {
        resolve()
      }
    )
  })
}

genTrackData()
