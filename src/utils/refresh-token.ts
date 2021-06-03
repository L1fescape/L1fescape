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
    console.log(url)
    const response = await fetch(url, {
      method: 'POST',
      body: new URLSearchParams(params).toString(),
    })
    console.log(url)
    if (!response.ok) {
      throw new Error(await response.text())
    }
    const res = await response.json()
    console.log(res)
    return res.access_token
  } catch (err) {
    console.error(err)
  }
}
