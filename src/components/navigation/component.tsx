import * as React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import * as cn from 'classnames'
import { NavRoutes } from 'ak.gg/routes'
import './styles.scss'

interface NavigationProps {
  className?: string
}

type Props = NavigationProps & RouteComponentProps

const NavigationComponent = (props: Props) => {
  const { location, className } = props
  const activeRoute = location.pathname

  return (
    <div className="navigation">
      {NavRoutes.map(route => (
        <Link
          key={route.path}
          to={route.path}
          className={cn(activeRoute.indexOf(route.path) === 0 && 'active')}
        >
          {route.text}
        </Link>
      ))}
    </div>
  )
}

export const Navigation = withRouter(NavigationComponent)
