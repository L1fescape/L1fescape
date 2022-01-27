import * as React from 'react'

import { Sites, Site, SiteNames } from '@/data/social-media'
import './style.scss'

export interface SocialMediaProps {
  hideIcons?: boolean
  hideNames?: boolean
}

interface LinkProps {
  url?: string
  className?: string
  noIcon?: boolean
  noText?: boolean
}

type SocialMediaLinkProps = LinkProps & {
  site: Site
}

export const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ site, url, className, noIcon, noText, children }) => (
  <a href={url ||site.url} target="_blank" className={className || site.className}>
    {noIcon ? (
      <>
        {children || site.text || site.name}
      </>
    ) : (
      <>
        <site.Icon />
        {<span>{children || (!noText && site.text) || site.name}</span>}
      </>
    )}
  </a>
)

export const LastfmLink: React.FC<LinkProps> = ({ url, noIcon, noText, children }) => (
  <SocialMediaLink site={Sites[SiteNames.lastfm]} url={url} noIcon={noIcon} noText={noText}>
    {children}
  </SocialMediaLink>
)

export const SpotifyLink: React.FC<LinkProps> = ({ url, noIcon, noText, children }) => (
  <SocialMediaLink site={Sites[SiteNames.spotify]} url={url} noIcon={noIcon} noText={noText}>
    {children}
  </SocialMediaLink>
)

export const GithubLink: React.FC<LinkProps> = ({ url, noIcon, children }) => (
  <SocialMediaLink site={Sites[SiteNames.github]} url={url} noIcon={noIcon}>
    {children}
  </SocialMediaLink>
)

export const SoundcloudLink: React.FC<LinkProps> = ({ url, noIcon, children }) => (
  <SocialMediaLink site={Sites[SiteNames.soundcloud]} url={url} noIcon={noIcon}>
    {children}
  </SocialMediaLink>
)

export const TwitterLink: React.FC<LinkProps> = ({ url, noIcon, children }) => (
  <SocialMediaLink site={Sites[SiteNames.twitter]} url={url} noIcon={noIcon}>
    {children}
  </SocialMediaLink>
)

export const InstagramLink: React.FC<LinkProps> = ({ url, noIcon, children }) => (
  <SocialMediaLink site={Sites[SiteNames.instagram]} url={url} noIcon={noIcon}>
    {children}
  </SocialMediaLink>
)

export const SocialMedia: React.FC<SocialMediaProps> = ({
  hideIcons,
  hideNames,
}) => (
  <>
    <SoundcloudLink noIcon={hideIcons} noText={hideNames} />
    <LastfmLink noIcon={hideIcons} noText={hideNames} />
    <SpotifyLink noIcon={hideIcons} noText={hideNames} />
    <GithubLink noIcon={hideIcons} noText={hideNames} />
    <TwitterLink noIcon={hideIcons} noText={hideNames} />
    <InstagramLink noIcon={hideIcons} noText={hideNames} />
  </>
)
