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

export const mixes: Mix[] = [{
  url: 'https://soundcloud.com/l1fescape/moongate',
  title: 'moongate',
  soundcloud: '1204353763',
  spotify: '5ywVhKummH20oqmvVDaSpm',
  description: 'played live at moongate lounge in san francisco, ca on jan 21 2022'
}, {
  url: 'https://soundcloud.com/spacejuicefm/juice-friends-10-l1fescape',
  title: 'spacejuice.fm',
  soundcloud: '1133311798',
  spotify: '7CeMqDjxrQPgVmyPqZBKJ6',
  description: 'set for my friend\'s internet radio show spacejuice.fm!',
}, {
  url: 'https://soundcloud.com/l1fescape/mix1',
  title: 'm1',
  // tracklist: m1Tracklist,
  soundcloud: '1053816040',
  spotify: '544H4ZhAWa94tbegE93ap',
  description: 'i recorded a mix of a few tunes i listened to a lot in the month of may 2021.',
}, {
  url: 'https://soundcloud.com/l1fescape/mix2',
  title: 'm2',
  soundcloud: '1155198274',
  spotify: '2VxPeV9cgCmiIAQfDouQ7T',
}]

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