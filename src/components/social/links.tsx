import * as React from 'react'
import { Accounts } from './accounts'
import { Platforms } from './platforms'

export interface LinkProps {
  className?: string
}

export type Link = React.FC<LinkProps>

export const Links: {[key: string]: Link} = {
  [Platforms.Twitter]: props => (
    <a
      title={Platforms.Twitter}
      className={Platforms.Twitter.toLowerCase()}
      href={Accounts[Platforms.Twitter].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ),
  [Platforms.Instagram]: props => (
    <a
      className={Platforms.Instagram.toLowerCase()}
      title={Platforms.Instagram}
      href={Accounts[Platforms.Instagram].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ),
  [Platforms.GitHub]: props => (
    <a
      className={Platforms.GitHub.toLowerCase()}
      title={Platforms.GitHub}
      href={Accounts[Platforms.GitHub].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ),
  [Platforms.SoundCloud]: props => (
    <a
      className={Platforms.SoundCloud.toLowerCase()}
      title={Platforms.SoundCloud}
      href={Accounts[Platforms.SoundCloud].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ),
  [Platforms.LinkedIn]: props => (
    <a
      className={Platforms.LinkedIn.toLowerCase()}
      title={Platforms.LinkedIn}
      href={Accounts[Platforms.LinkedIn].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ),
  [Platforms.DevTo]: props => (
    <a
      title={Platforms.DevTo}
      href={Accounts[Platforms.DevTo].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ),
}
