import fetch from 'node-fetch'

export const playlistIDs: string[] = [
  'spotify:playlist:1IoSlQbiD7OZ7APX3tviuX',
  'spotify:playlist:0Qf5El4jvjpUnsJ4YZdTKo',
  'spotify:playlist:1EOj4DNc4LJD6ujTkFu6N7',
]

export interface PlaylistData {
  id: string
  images: {
    height: number
    url: string
  }[]
  name: string
  external_urls: {
    spotify: string
  }
}

const base = 'https://api.spotify.com/v1'

function formatPlaylistId(id: string): string {
  const parts = id.split(':')
  if (parts.length === 1) {
    return id
  }
  if (parts.length === 3 && parts[1] === 'playlist') {
    return parts[2]
  }
  throw new Error(`unknown id: ${id}`)
}

export async function getPlaylist(
  token: string,
  id: string
): Promise<PlaylistData> {
  id = formatPlaylistId(id)
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
