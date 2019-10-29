import * as React from 'react'
import { Accounts } from './accounts'
import { Platforms } from './platforms'
import { Link, LinkComponentType } from 'ak.gg/components/link'

function getAccountLink(platform: Platforms): LinkComponentType {
  return props => (
    <Link
      className={props.className || platform.toLowerCase()}
      url={Accounts[platform].url}
      title={platform}
      {...props}
    >
      {props.children || platform}
    </Link>
  )
}

function getLink(url: string, text: string, title: string): LinkComponentType {
  return props => (
    <Link url={url} title={title} {...props}>
      {props.children || text}
    </Link>
  )
}

export const Links: { [key in Platforms]: LinkComponentType } = {
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
