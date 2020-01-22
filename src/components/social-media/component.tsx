import * as React from 'react'
import { AccountsList } from './accounts'
import './styles.scss'

export interface SocialIconsProps {
  hideTitle?: boolean
}

export const SocialMedia: React.FC<SocialIconsProps> = props => (
  <div className="social-media">
    {!props.hideTitle && <h4>Elsewhere on the Internet</h4>}
    <div className="links">
      {AccountsList.map(({ Link, Icon, title }) => (
        <Link key={title}>
          <Icon />
          {!props.hideTitle && <span>{title}</span>}
        </Link>
      ))}
    </div>
  </div>
)
