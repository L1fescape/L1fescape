import * as React from 'react'
import { Routes } from 'ak.gg/routes'
import { Socials, ViewSource, Navigation, Link } from 'ak.gg/components'
import './styles.scss'

export interface FooterProps {
  pageSource?: string
}

export const Footer: React.FC<FooterProps> = props => (
  <div className="footer">
    <Socials />
    <div className="row">
      <div className="home-link">
        <Link to={Routes.Home.path}>
          <h3>{Routes.Home.text}</h3>
        </Link>
      </div>
      <Navigation />
      <div className="love">
        <p>Made with ♥ in SF</p>
        {props.pageSource && (
          <p>
            <ViewSource source={props.pageSource} />
          </p>
        )}
      </div>
    </div>
  </div>
)
