import * as React from 'react'
import { Accounts } from './accounts'
import { Platforms } from './platforms'
import { ExternalLink } from 'ak.gg/components/link'

export interface AccountLinkProps {
  to?: string
  className?: string
}

export type AccountLink = React.FC<AccountLinkProps>

function getAccountLink(platform: Platforms): AccountLink {
  return props => (
    <ExternalLink
      className={props.className || platform.toLowerCase()}
      to={Accounts[platform].url}
      title={platform}
      {...props}
    >
      {props.children || platform}
    </ExternalLink>
  )
}

function getLink(url: string, text: string, title: string): AccountLink {
  return props => (
    <ExternalLink to={url} title={title} {...props}>
      {props.children || text}
    </ExternalLink>
  )
}

export const SocialMediaLinks: { [key in Platforms]: AccountLink } = {
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
