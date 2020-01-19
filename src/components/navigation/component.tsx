import * as React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import * as cn from 'classnames'
import { Page, PagesMap } from 'ak.gg/pages'
import './styles.scss'

interface NavigationProps {
  className?: string
}

type Props = NavigationProps & RouteComponentProps

export const NavRoutes: Page[] = [
  PagesMap.CounterStrike,
  PagesMap.Blog,
]

const NavigationComponent = (props: Props) => {
  const { location } = props
  const activeRoute = location.pathname

  return (
    <div className="navigation">
      <div className="home-link">
        <Link to={PagesMap.Home.path}>{PagesMap.Home.text}</Link>
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
}

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