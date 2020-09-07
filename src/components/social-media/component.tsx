import * as React from 'react'
import { Icons } from 'l1/components/icons'
import './style.scss'

export interface SocialMediaProps {
  hideIcons?: boolean
  hideNames?: boolean
}

const Sites = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/L1fescape',
    Icon: Icons.Twitter,
    className: 'twitter',
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/L1fescape',
    Icon: Icons.Instagram,
    className: 'instagram',
  },
  {
    name: 'SoundCloud',
    link: 'https://soundcloud.com/L1fescape',
    Icon: Icons.SoundCloud,
    className: 'soundcloud',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/L1fescape',
    Icon: Icons.GitHub,
    className: 'github',
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
