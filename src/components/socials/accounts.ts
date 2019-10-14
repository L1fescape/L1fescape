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
    link: Links.Twitter,
    icon: Icons[Platforms.Twitter],
  },
  [Platforms.Instagram]: {
    username: 'L1fescape',
    url: 'https://www.instagram.com/l1fescape',
    link: Links.Instagram,
    icon: Icons[Platforms.Instagram],
  },
  [Platforms.GitHub]: {
    username: 'L1fescape',
    url: 'https://github.com/l1fescape',
    link: Links.GitHub,
    icon: Icons[Platforms.GitHub],
  },
  [Platforms.SoundCloud]: {
    username: 'L1fescape',
    url: 'https://soundcloud.com/l1fescape',
    link: Links.SoundCloud,
    icon: Icons[Platforms.SoundCloud],
  },
  [Platforms.LinkedIn]: {
    username: 'L1fescape',
    url: 'https://www.linkedin.com/in/l1fescape/',
    link: Links.LinkedIn,
    icon: Icons[Platforms.LinkedIn],
  },
  [Platforms.DevTo]: {
    username: 'L1fescape',
    url: 'https://dev.to//l1fescape/',
    link: Links.DEV,
    icon: Icons[Platforms.DevTo],
  },
}

export const AccountsList: Account[] = Object.keys(Accounts).map(key => ({
  ...Accounts[key as Platforms],
  title: key,
}))
