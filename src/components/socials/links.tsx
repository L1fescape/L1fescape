import * as React from 'react'
import { Accounts } from './accounts'
import { Platforms } from './platforms'

export interface LinkProps {
  className?: string
  url?: string
  title?: string
}

export type Link = React.FC<LinkProps>

const defaultLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

function getLink(url: string, text: string, title?: string): Link {
  return props => (
    <a
      title={props.title || title || text}
      className={props.className || ''}
      href={props.url || url}
      {...defaultLinkProps}
    >
      {props.children || text}
    </a>
  )
}

function getAccountLink(platform: Platforms): Link {
  return props => {
    const Link = getLink(Accounts[platform].url, platform)
    return (
      <Link className={props.className || platform.toLowerCase()}>
        {props.children}
      </Link>
    )
  }
}

export const Links: { [key in Platforms]: Link } = {
  [Platforms.Twitter]: getAccountLink(Platforms.Twitter),
  [Platforms.Instagram]: getAccountLink(Platforms.Instagram),
  [Platforms.GitHub]: getAccountLink(Platforms.GitHub),
  [Platforms.SoundCloud]: getAccountLink(Platforms.SoundCloud),
  [Platforms.LinkedIn]: getAccountLink(Platforms.LinkedIn),
  [Platforms.DevTo]: getAccountLink(Platforms.DevTo),
  [Platforms.RSS]: getLink(
    '/feed.xml',
    'subscribe via RSS',
    'Subscribe to the RSS feed'
  ),
  [Platforms.SauceLabs]: getLink(
    'https://saucelabs.com',
    'Sauce Labs',
    'Sauce Labs: Cross Browser Testing, Selenium Testing, Mobile Testing'
  ),
}
