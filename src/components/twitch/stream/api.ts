import fetch from 'node-fetch'

export interface TwitchStreamData {
  user_name: string
  thumbnail_url: string
  title: string
  type: string
}

export interface TwitchStream {
  url: string
  thumbnailUrl: string
  title: string
  isLive: boolean
}

const base = 'https://api.twitch.tv/helix'

function formatStream(data: TwitchStreamData): TwitchStream {
  return {
    url: `https://twitch.tv/${data.user_name}`,
    thumbnailUrl: data.thumbnail_url
      .replace('{width}', '500')
      .replace('{height}', '300'),
    title: data.title,
    isLive: data.type === 'live',
  }
}

export async function getStream(
  token: string,
  clientId: string,
  channelId: string
): Promise<TwitchStream | undefined> {
  console.log(channelId)
  try {
    const response = await fetch(`${base}/streams?user_id=${channelId}`, {
      method: 'GET',
      headers: {
        'client-id': clientId,
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(await response.text())
    }
    const data = await response.json()
    if (data && data.data && data.data.length) {
      return formatStream(data.data[0])
    }
    return
  } catch (err) {
    console.error(err)
  }
}
