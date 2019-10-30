import * as React from 'react'
import { createContext } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import * as cn from 'classnames'
import { Routes, RouteToPageMap, NavRoutes } from 'ak.gg'
import './styles.scss'

interface SetHeaderState {
  setHeaderFixed?(fixed: boolean): void
  setHeaderHomeLinkVisible?(hideHomeLink: boolean): void
  setHeaderHidden?(headerHidden: boolean): void
}

interface HeaderProps {
  fixed: boolean
  hideHomeLink: boolean
}

type Props = HeaderProps & RouteComponentProps

export const HeaderContext = createContext<SetHeaderState>({})

const HeaderComponent = (props: Props) => {
  const { fixed, hideHomeLink, location } = props
  const activeRoute = location.pathname

  return (
    <div className={cn('header', fixed && 'fixed')}>
      <div className="home-link">
        <Link to={Routes.Home} className={cn(hideHomeLink && 'hidden')}>
          {RouteToPageMap.get(Routes.Home).text}
        </Link>
      </div>
      <div className="navigation">
        {NavRoutes.map(route => (
          <Link
            key={route}
            to={route}
            className={activeRoute === route ? 'active' : ''}
          >
            {RouteToPageMap.get(route).text}
          </Link>
        ))}
      </div>
    </div>
  )
}

export const Header = withRouter(HeaderComponent)
