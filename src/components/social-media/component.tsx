import * as React from 'react'
import { Icons } from 'l1/components/icons'
import './style.scss'

export interface SocialMediaProps {
  hideIcons?: boolean
  hideNames?: boolean
}

const Sites = [
  {
    name: 'soundcloud',
    link: 'https://soundcloud.com/L1fescape',
    Icon: Icons.SoundCloud,
    className: 'soundcloud',
  },
  {
    name: 'last.fm',
    link: 'https://www.last.fm/user/L1fescape',
    Icon: Icons.Lastfm,
    className: 'lastfm',
  },
  {
    name: 'spotify',
    link: 'https://open.spotify.com/user/1224725738?si=DUfTrXamShCL0iZUCXNF7Q',
    Icon: Icons.Spotify,
    className: 'spotify',
  },
  {
    name: 'github',
    link: 'https://github.com/L1fescape',
    Icon: Icons.GitHub,
    className: 'github',
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/L1fescape',
    Icon: Icons.Twitter,
    className: 'twitter',
  },
  {
    name: 'instagram',
    link: 'https://instagram.com/L1fescape',
    Icon: Icons.Instagram,
    className: 'instagram',
  },
]

export const SocialMedia: React.FC<SocialMediaProps> = ({
  hideIcons,
  hideNames,
}) => (
  <>
    {Sites.map(({ name, link, Icon, className }) => {
      let children = (
        <>
          <Icon />
          <span>{name}</span>
        </>
      )
      if (hideIcons) {
        children = <>{name}</>
      }
      if (hideNames) {
        children = <Icon />
      }
      return (
        <a key={name} href={link} target="_blank" className={className}>
          {children}
        </a>
      )
    })}
  </>
)
