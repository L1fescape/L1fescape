import * as React from 'react'
import * as cn from 'classnames'
import { ExternalLink } from '../link'
import { platformInfo, Platform } from './platforms'
import { Icons } from './icons'

export interface SocialMediaLinkProps {
  icon?: boolean
  to?: string
  className?: string
}

type Props = SocialMediaLinkProps & {
  platform: Platform
}

export const SocialMediaLink: React.FC<Props> = ({
  platform,
  icon,
  to,
  children,
  className,
}) => {
  const { className: platformClassName, url, title } = platformInfo[platform]
  const Icon = Icons[platform]
  const showIcon = icon
  const content = children || title

  return (
    <ExternalLink
      className={cn([showIcon && 'link-icon', className, platformClassName])}
      to={to || url}
      title={title}
    >
      {showIcon ? (
        <>
          <Icon /> <span>{content}</span>
        </>
      ) : (
        content
      )}
    </ExternalLink>
  )
}

export const SocialMediaLinks: {
  [key in Platform]: React.FC<SocialMediaLinkProps>
} = {
  SoundCloud: props => <SocialMediaLink platform="SoundCloud" {...props} />,
  Twitter: props => <SocialMediaLink platform="Twitter" {...props} />,
  GitHub: props => <SocialMediaLink platform="GitHub" {...props} />,
  Instagram: props => <SocialMediaLink platform="Instagram" {...props} />,
  DevTo: props => <SocialMediaLink platform="DevTo" {...props} />,
}
