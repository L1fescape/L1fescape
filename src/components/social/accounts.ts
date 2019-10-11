import { Links, Link } from './links'
import { Icons, Icon } from './icons'
import { Platforms } from './platforms'

export interface Account {
  username?: string
  userID?: string
  title?: string
  url: string
  link: Link
  icon: Icon
}

export const Accounts: { [key: string]: Account } = {
  [Platforms.Twitter]: {
    username: 'L1fescape',
    userID: '7319852',
    url: 'https://twitter.com/l1fescape',
    link: Links[Platforms.Twitter],
    icon: Icons[Platforms.Twitter],
  },
  [Platforms.Instagram]: {
    username: 'L1fescape',
    url: 'https://www.instagram.com/l1fescape',
    link: Links[Platforms.Instagram],
    icon: Icons[Platforms.Instagram],
  },
  [Platforms.GitHub]: {
    username: 'L1fescape',
    url: 'https://github.com/l1fescape',
    link: Links[Platforms.GitHub],
    icon: Icons[Platforms.GitHub],
  },
  [Platforms.SoundCloud]: {
    username: 'L1fescape',
    url: 'https://soundcloud.com/l1fescape',
    link: Links[Platforms.SoundCloud],
    icon: Icons[Platforms.SoundCloud],
  },
  [Platforms.LinkedIn]: {
    username: 'L1fescape',
    url: 'https://www.linkedin.com/in/l1fescape/',
    link: Links[Platforms.LinkedIn],
    icon: Icons[Platforms.LinkedIn],
  },
  [Platforms.DevTo]: {
    username: 'L1fescape',
    url: 'https://dev.to//l1fescape/',
    link: Links[Platforms.DevTo],
    icon: Icons[Platforms.DevTo],
  },
}
