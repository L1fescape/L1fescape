import * as React from 'react'
import { SocialMediaLinks } from './links'
import { Icons } from './icons'
import { Platform } from './platforms'
import './social-media.scss'

export interface SocialMediaProps {
  icons?: boolean
  className?: string
  children?(platform: Platform): React.ReactNode
}

export const SocialMedia: React.FC<SocialMediaProps> = props => (
  <>
    {Object.keys(SocialMediaLinks).map(pf => {
      const platform = pf as Platform
      const Link = SocialMediaLinks[platform]
      const children =
        typeof props.children === 'function'
          ? props.children(platform)
          : props.children
      return (
        <Link key={platform} icon={props.icons} {...props}>
          {children}
        </Link>
      )
    })}
  </>
)

export const SocialMediaIcons: React.FC<SocialMediaProps> = props => (
  <SocialMedia className="link-icon" {...props}>
    {platform => {
      const Icon = Icons[platform]
      return <Icon />
    }}
  </SocialMedia>
)
