import * as React from 'react'
import { Link } from 'react-router-dom'
import * as cn from 'classnames'
import { PageRoots } from 'ak.gg/pages'
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
        { !!hideHomeLink ? null : (
          <Link to={PageRoots.Home}>ak.gg</Link>
        )}
      </div>
      <div className="navigation">
        <Link to={PageRoots.Art}>art</Link>
        <Link to={PageRoots.Music}>music</Link>
        <Link to={PageRoots.Notes}>notes</Link>
      </div>
    </div>

  )
}