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

function getLink(url: string, title: string): Link {
  return props => (
    <a
      title={title}
      className={props.className || ''}
      href={url}
      {...defaultLinkProps}
    >
      {props.children || title}
    </a>
  )
}

function getAccountLink(platform: Platforms): Link {
  return props => (
    <a
      title={props.title || platform}
      className={props.className || platform.toLowerCase()}
      href={props.url || Accounts[platform].url}
      {...defaultLinkProps}
    >
      {props.children || props.title}
    </a>
  )
}

export const Links: { [key in Platforms]: Link } = {
  [Platforms.Twitter]: getAccountLink(Platforms.Twitter),
  [Platforms.Instagram]: getAccountLink(Platforms.Instagram),
  [Platforms.GitHub]: getAccountLink(Platforms.GitHub),
  [Platforms.SoundCloud]: getAccountLink(Platforms.SoundCloud),
  [Platforms.LinkedIn]: getAccountLink(Platforms.LinkedIn),
  [Platforms.DevTo]: getAccountLink(Platforms.DevTo),
  [Platforms.RSS]: getLink('/feed.xml', 'subscribe via RSS'),
  [Platforms.SauceLabs]: getLink('https://saucelabs.com', 'Sauce Labs'),
}
