import fetch from 'node-fetch'

export interface AccountData {
  access_token: string
  refresh_token: string
}

const base = 'https://accounts.spotify.com/api'

export async function refreshToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<string> {
  try {
    const params = {
      grant_type: 'client_credentials',
      refresh_token: refreshToken,
    }
    const response = await fetch(`${base}/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(params).toString(),
    })
    if (!response.ok) {
      throw new Error(await response.text())
    }
    const res = await response.json()
    return res.access_token
  } catch (err) {
    console.error(err)
  }
}
