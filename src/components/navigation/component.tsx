import * as React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import * as cn from 'classnames'
import { routes, routeText, Route } from 'ak.gg/routes'
import './styles.scss'

interface NavigationProps {}

type Props = NavigationProps & RouteComponentProps

interface NavRoute {
  path: string
  text: string
}

export const NavRoutes: NavRoute[] = [
  {
    path: routes.cs,
    text: routeText.cs,
  },
  {
    path: routes.blog,
    text: routeText.blog,
  },
]

const NavigationComponent: React.FC<Props> = ({
  location: { pathname: activeRoute },
}) => (
  <div className="navigation">
    <div className="home-link">
      <Link to={routes.home}>{routeText.home}</Link>
    </div>
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

export const Navigation = withRouter(NavigationComponent)

export interface SubNavSection {
  name: string
  id: string
}

export interface SubNavProps {
  sections: SubNavSection[]
}

export const SubNav: React.FC<SubNavProps> = props => (
  <ul>
    {props.sections.map(section => (
      <li key={section.id}>
        <HashLink smooth to={`#${section.id}`}>
          {section.name}
        </HashLink>
      </li>
    ))}
  </ul>
)
