export interface APITrack {
  artworkURL: string
  audioURL: string
  title: string
  artist: string
  url: string
}

export interface APITracksResponse {
  tracks: APITrack[]
}