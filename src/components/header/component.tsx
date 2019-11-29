import * as React from 'react'
import { createContext } from 'react'
import * as cn from 'classnames'

import { Navigation, Link } from 'ak.gg/components'
import { Routes } from 'ak.gg/routes'
import './styles.scss'

interface SetHeaderState {
  setClassName?(className: string): void
}

interface HeaderProps {
  className?: string
}

export const HeaderContext = createContext<SetHeaderState>({})

export const Header: React.FC<HeaderProps> = props => {
  const { className } = props

  return (
    <div className={cn('header', className)}>
      <div className="home-link">
        <Link to={Routes.Home.path}>{Routes.Home.text}</Link>
      </div>
      <Navigation />
    </div>
  )
}
