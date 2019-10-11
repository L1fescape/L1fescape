import * as React from 'react'
import { AccountsList } from './accounts'

export interface SocialIconsProps {
  hideTitle?: boolean
}

export const SocialIcons: React.FC<SocialIconsProps> = props => (
  <>
    {AccountsList.map(account => (
      <account.link>
        {account.icon}
        {!props.hideTitle && account.title}
      </account.link>
    ))}
  </>
)
