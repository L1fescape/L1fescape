import fetch from 'node-fetch'

export interface Track {
  artist: {
    name: string
  }
  name: string
  image: {
    size: string
    '#text': string
  }[]
  url: string
}

export interface LastfmData {
  toptracks: {
    track: Track[]
  }
}

const base = 'https://ws.audioscrobbler.com/2.0/'
const args: any = {
  method: 'user.getTopTracks',
  period: '1day',
  limit: 10,
  user: 'L1fescape',
  format: 'json',
}

export async function getTracks(apikey: string): Promise<LastfmData> {
  args['api_key'] = apikey
  try {
    const url = `${base}?${new URLSearchParams(args).toString()}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(await response.text())
    }
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}
