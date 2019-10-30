import * as React from 'react'
import { Link, Socials } from 'ak.gg/components'
import { Routes, RouteToPageMap, NavRoutes } from 'ak.gg'
import {
  Link as RouterLink,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom'
import './styles.scss'

function getURLFromSource(filename: string) {
  const projectRoot = 'https://github.com/l1fescape/ak.gg'
  const branchPath = '/tree/master/'
  const url = `${projectRoot}${branchPath}${filename}`
  return url
}

interface FooterProps {
  pageSource?: string
}

export type Props = FooterProps & RouteComponentProps

export const FooterComponent = (props: Props) => (
  <div className="footer">
    <Socials />
    <div className="row">
      <div className="home-link">
        <RouterLink to={Routes.Home}>
          <h3>{RouteToPageMap.get(Routes.Home).text}</h3>
        </RouterLink>
      </div>
      <div className="navigation">
        {NavRoutes.map(route => (
          <span key={route}>
            <RouterLink
              to={route}
              className={props.location.pathname === route ? 'active' : ''}
            >
              {RouteToPageMap.get(route).text}
            </RouterLink>
          </span>
        ))}
      </div>
      <div className="love">
        <p>Made with ♥ in SF</p>
        {props.pageSource && (
          <p>
            <Link
              title={'View Page Source'}
              url={getURLFromSource(props.pageSource)}
            >
              View Source
            </Link>
          </p>
        )}
      </div>
    </div>
  </div>
)

export const Footer = withRouter(FooterComponent)
