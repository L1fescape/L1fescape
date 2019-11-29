import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export interface LinkProps {
  to: string
  className?: string
  title?: string
  text?: string
}

export type LinkComponentType = React.FC<LinkProps>

export const Link: LinkComponentType = props => {
  return <RouterLink {...props}>{props.children || props.text}</RouterLink>
}

const defaultExternalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const ExternalLink: LinkComponentType = props => (
  <a
    title={props.title || props.text}
    href={props.to}
    {...(props.className ? { className: props.className } : {})}
    {...defaultExternalLinkProps}
  >
    {props.children || props.text}
  </a>
)
