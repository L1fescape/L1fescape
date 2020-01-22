import * as React from 'react'
import { Link } from 'ak.gg/components/link'
import { SocialMediaLinks, Platforms } from 'ak.gg/components/social-media'
import { routes, Route, routeText } from 'ak.gg/routes'

type LinkTypes = Platforms | Route

export const Links: { [key in LinkTypes]: React.FC<{ to?: string }> } = {
  ...SocialMediaLinks,
  home: props => (
    <Link to={routes.home}>{props.children || routeText.home}</Link>
  ),
  blog: props => (
    <Link to={routes.blog}>{props.children || routeText.blog}</Link>
  ),
  cs: props => <Link to={routes.cs}>{props.children || routeText.cs}</Link>,
  code: props => (
    <Link to={routes.code}>{props.children || routeText.code}</Link>
  ),
}
