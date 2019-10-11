import {
  SocialLink,
  TwitterLink,
  InstagramLink,
  GitHubLink,
  SoundCloudLink,
  LinkedInLink,
} from './links'
import {
  SocialIcon,
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  SoundCloudIcon,
  LinkedInIcon,
} from './icons'

export enum Platform {
  Twitter = 'Twitter',
  Instagram = 'Instagram',
  GitHub = 'GitHub',
  SoundCloud = 'SoundCloud',
  LinkedIn = 'LinkedIn',
}

export interface Account {
  username?: string
  userID?: string
  title?: string
  url: string
  link: SocialLink
  icon: SocialIcon
}

export const Accounts: { [key: string]: Account } = {
  [Platform.Twitter]: {
    username: 'L1fescape',
    userID: '7319852',
    url: 'https://twitter.com/l1fescape',
    link: TwitterLink,
    icon: TwitterIcon,
  },
  [Platform.Instagram]: {
    username: 'L1fescape',
    url: 'https://www.instagram.com/l1fescape',
    link: InstagramLink,
    icon: InstagramIcon,
  },
  [Platform.GitHub]: {
    username: 'L1fescape',
    url: 'https://github.com/l1fescape',
    link: GitHubLink,
    icon: GitHubIcon,
  },
  [Platform.SoundCloud]: {
    username: 'L1fescape',
    url: 'https://soundcloud.com/l1fescape',
    link: SoundCloudLink,
    icon: SoundCloudIcon,
  },
  [Platform.LinkedIn]: {
    username: 'L1fescape',
    url: 'https://www.linkedin.com/in/l1fescape/',
    link: LinkedInLink,
    icon: LinkedInIcon,
  },
}

export const AccountsList: Account[] = Object.keys(Accounts).map(key => ({
  ...Accounts[key as Platform],
  title: key,
}))
