import * as React from 'react'

export interface LinkProps {
  className?: string
  url?: string
  title?: string
  text?: string
}

export type LinkComponent = React.FC<LinkProps>

const defaultLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const Link: LinkComponent = props => (
  <a
    title={props.title || props.text}
    className={props.className || ''}
    href={props.url}
    {...defaultLinkProps}
  >
    {props.children || props.text}
  </a>
)
