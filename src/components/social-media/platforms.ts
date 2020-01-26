export interface PlatformInfo {
  username?: string
  userID?: string
  title: string
  url: string
  className?: string
}

export type Platform =
  | 'SoundCloud'
  | 'Twitter'
  | 'Instagram'
  | 'GitHub'
  | 'DevTo'

export const platformInfo: { [key in Platform]: PlatformInfo } = {
  SoundCloud: {
    username: 'L1fescape',
    url: 'https://soundcloud.com/l1fescape',
    className: 'link-soundcloud',
    title: 'SoundCloud',
  },
  Twitter: {
    username: 'L1fescape',
    userID: '7319852',
    url: 'https://twitter.com/l1fescape',
    className: 'link-twitter',
    title: 'Twitter',
  },
  Instagram: {
    username: 'L1fescape',
    url: 'https://www.instagram.com/l1fescape',
    className: 'link-instagram',
    title: 'Instagram',
  },
  GitHub: {
    username: 'L1fescape',
    url: 'https://github.com/l1fescape',
    title: 'GitHub',
    className: 'link-github',
  },
  DevTo: {
    username: 'L1fescape',
    url: 'https://dev.to/l1fescape/',
    title: 'DevTo',
    className: 'link-devto',
  },
}
