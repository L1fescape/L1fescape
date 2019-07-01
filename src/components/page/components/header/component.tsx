import * as React from 'react'
import { Link } from 'react-router-dom'
import * as cn from 'classnames'
import './styles.scss'
import { Routes, RouteToPageMap } from 'ak.gg/utils/router'

export interface HeaderProps {
  fixed?: boolean
  hideHomeLink?: boolean
}

export const Header = (props: HeaderProps) => {
  const { fixed, hideHomeLink } = props
  return (
    <div className={cn('header', fixed && 'fixed')}>
      <div className="home-link">
        { !!hideHomeLink ? null : (
          <Link to={Routes.Home}>{RouteToPageMap.get(Routes.Home).text}</Link>
        )}
      </div>
      <div className="navigation">
        <Link to={Routes.Blog}>{RouteToPageMap.get(Routes.Blog).text}</Link>
        <Link to={Routes.Projects}>{RouteToPageMap.get(Routes.Projects).text}</Link>
      </div>
    </div>
  )
}