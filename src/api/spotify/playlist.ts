import fetch from 'node-fetch'

export interface PlaylistData {
  id: string
  images: {
    height: number
    url: string
  }[]
  name: string
  description: string
  external_urls: {
    spotify: string
  }
}

const base = 'https://api.spotify.com/v1'

export function parsePlaylistId(id: string): string {
  const parts = id.split(':')
  // 1IoSlQbiD7OZ7APX3tviuX
  if (parts.length === 1) {
    return id
  }
  // spotify:playlist:1IoSlQbiD7OZ7APX3tviuX
  if (parts.length === 3 && parts[1] === 'playlist') {
    return parts[2]
  }
  // remove query params ?si=asdfasdf
  if (id.indexOf('?') > -1) {
    id = id.split('?')[0]
  }
  // https://open.spotify.com/playlist/19x8zn8rBoAzl0EEciH14w
  if (id.indexOf('://') > -1) {
    if (id.charAt(id.length - 1) === '/') {
      id = id.slice(0, id.length - 1)
    }
    return id.substring(id.lastIndexOf('/') + 1)
  }
  return id
}

export async function getPlaylist(
  token: string,
  id: string
): Promise<PlaylistData> {
  id = parsePlaylistId(id)
  console.log(id)
  try {
    const response = await fetch(`${base}/playlists/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(await response.text())
    }
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}
