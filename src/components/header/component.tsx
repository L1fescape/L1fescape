import * as React from 'react'
import { HomeLink, Navigation } from 'ak.gg/components/navigation'
import './styles.scss'

export const Header: React.StatelessComponent<{}> = () => (
  <div className="header">
    <HomeLink />
    <Navigation />
  </div>
)