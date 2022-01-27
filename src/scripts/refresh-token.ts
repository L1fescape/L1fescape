export async function refreshToken(
  url: string,
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<string> {
  try {
    const params = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    }
    const response = await fetch(url, {
      method: 'POST',
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
