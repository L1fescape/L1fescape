import * as React from 'react'
import { Link } from 'react-router-dom'
import { PageRoots } from 'ak/pages'
import * as cn from 'classnames'
import './styles.scss'

export interface PublicProps {
  fixed?: boolean
  hideHomeLink?: boolean
}

export const Header = (props: PublicProps) => {
  const { fixed, hideHomeLink } = props
  return (
    <div className={cn('header', fixed && 'fixed')}>
      <div className="home-link">
        { typeof hideHomeLink !== 'undefined' && hideHomeLink ? null : (
          <Link to={PageRoots.Home}>ak.gg</Link>
        )}
      </div>
      <div className="navigation">
        <Link to={PageRoots.Music}>art</Link>
        <Link to={PageRoots.Music}>blog</Link>
      </div>
    </div>

  )
}