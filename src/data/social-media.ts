import { Icons } from 'l1/components/icons'

export interface Site {
  name: string
  url: string
  Icon: React.FC
  text?: string
  className?: string
}

export enum SiteNames {
  soundcloud,
  lastfm,
  spotify,
  github,
  twitter,
  instagram,
}

export const Sites: {[key in SiteNames]: Site} = {
  [SiteNames.soundcloud]: {
    name: 'soundcloud',
    url: 'https://soundcloud.com/L1fescape',
    Icon: Icons.SoundCloud,
    className: 'soundcloud',
  },
  [SiteNames.lastfm]: {
    name: 'last.fm',
    url: 'https://www.last.fm/user/L1fescape',
    Icon: Icons.Lastfm,
    className: 'lastfm',
  },
  [SiteNames.spotify]: {
    name: 'spotify',
    url: 'https://open.spotify.com/user/1224725738?si=DUfTrXamShCL0iZUCXNF7Q',
    Icon: Icons.Spotify,
    className: 'spotify',
  },
  [SiteNames.github]: {
    name: 'github',
    url: 'https://github.com/L1fescape',
    Icon: Icons.GitHub,
    className: 'github',
  },
  [SiteNames.twitter]: {
    name: 'twitter',
    url: 'https://twitter.com/L1fescape',
    Icon: Icons.Twitter,
    className: 'twitter',
  },
  [SiteNames.instagram]: {
    name: 'instagram',
    url: 'https://instagram.com/L1fescape',
    Icon: Icons.Instagram,
    className: 'instagram',
  },
}
