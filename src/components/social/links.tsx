import * as React from 'react'
import { Platform, Accounts } from './accounts'

export interface SocialLinkProps {
  children: React.ReactElement | React.ReactElement[] | string
}

export type SocialLink = React.FC<SocialLinkProps>

export const TwitterLink: SocialLink = props => (
  <a
    title={Platform.Twitter}
    href={Accounts[Platform.Twitter].url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)

export const InstagramLink: SocialLink = props => (
  <a
    title={Platform.Instagram}
    href={Accounts[Platform.Instagram].url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)

export const GitHubLink: SocialLink = props => (
  <a
    title={Platform.GitHub}
    href={Accounts[Platform.GitHub].url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)

export const SoundCloudLink: SocialLink = props => (
  <a
    title={Platform.SoundCloud}
    href={Accounts[Platform.SoundCloud].url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)

export const LinkedInLink: SocialLink = props => (
  <a
    title={Platform.LinkedIn}
    href={Accounts[Platform.LinkedIn].url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)