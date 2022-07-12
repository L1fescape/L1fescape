const baseUrl = process.env.API_BASE_URL || '/api'

export const getData = async () => {
  try {
    const response = await fetch(`${baseUrl}/music`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}