export interface Track {
  artist: string
  track: string
  url?: string
}

export type Tracklist = Track[]
export interface Mix {
  title: string
  soundcloud: string
  url?: string
  spotify?: string
  tracklist?: Tracklist
  description?: string
}

export const m1Tracklist: Tracklist = [
  {
    track: 'Terrain: III',
    artist: 'Portico Quartet',
  },
  {
    track: 'Sister (Floating Points Remix)',
    artist: 'Caribou',
  },
  {
    track: 'Reserve Parachute',
    artist: 'Dark Sky',
  },
  {
    track: 'Unity',
    artist: 'Phaeleh',
  },
  {
    track: 'Balearic Incarnation',
    artist: 'Dolle Jolle',
  },
  {
    track: 'Nomad',
    artist: 'Tor',
  },
  {
    track: 'Debold',
    artist: 'Vegyn',
  },
  {
    track: 'heal',
    artist: 'ICO',
  },
]