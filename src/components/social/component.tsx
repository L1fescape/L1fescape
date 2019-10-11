import * as React from 'react'
import { Accounts, Account } from './accounts'
import { Platforms } from './platforms'
import './styles.scss'

export interface SocialIconsProps {
  hideTitle?: boolean
}

export const SocialAccountsList: Account[] = (
  Object
    .keys(Accounts)
    .map(key => ({
      ...Accounts[key as Platforms],
      title: key,
    }))
)

export const SocialIcons: React.FC<SocialIconsProps> = props => (
  <div className="social">
    {SocialAccountsList.map(account => (
      <account.link key={account.title}>
        <account.icon />
        {!props.hideTitle && account.title}
      </account.link>
    ))}
  </div>
)
