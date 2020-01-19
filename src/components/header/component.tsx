import * as React from 'react'
import * as cn from 'classnames'
import { Navigation, Link } from 'ak.gg/components'
import { PagesMap } from 'ak.gg/pages'
import './styles.scss'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = props => {
  const { className } = props

  return (
    <div className={cn('header', className)}>
      <Navigation />
    </div>
  )
}
