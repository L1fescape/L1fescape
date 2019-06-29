import * as React from 'react'
import { Link } from 'react-router-dom'
import * as cn from 'classnames'
import './styles.scss'
import { Pages } from 'ak.gg/utils/router';

export interface PublicProps {
  fixed?: boolean
  hideHomeLink?: boolean
}

export const Header = (props: PublicProps) => {
  const { fixed, hideHomeLink } = props
  return (
    <div className={cn('header', fixed && 'fixed')}>
      <div className="home-link">
        { !!hideHomeLink ? null : (
          <Link to={Pages.home.path}>{Pages.home.text}</Link>
        )}
      </div>
      <div className="navigation">
        {Object.keys(Pages).filter(page => page !== 'home').map(page => {
          const route = Pages[page]
          return (
            <Link
              key={page}
              to={route.path}
            >
              {route.text}
            </Link>
          )
        })}
      </div>
    </div>

  )
}