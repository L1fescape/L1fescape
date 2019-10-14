import * as React from 'react'
import { AccountsList } from './accounts'
import './styles.scss'

export interface SocialIconsProps {
  hideTitle?: boolean
}

export const Socials: React.FC<SocialIconsProps> = props => (
  <div className="social">
    {AccountsList.map(account => (
      <account.link key={account.title}>
        <account.icon />
        {!props.hideTitle && <span>{account.title}</span>}
      </account.link>
    ))}
  </div>
)
