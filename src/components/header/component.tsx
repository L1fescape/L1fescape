import * as React from 'react'
import { Link } from 'react-router-dom'
import { PageRoots } from 'ak/pages'
import './styles.scss'

export interface PublicProps {
  fixed?: boolean
}

export const Header = (props: PublicProps) => {
  const { fixed } = props
  const fixedHeader = typeof fixed !== 'undefined' && fixed
  return (
    <div className={`header ${fixedHeader ? 'fixed' : ''}`}>
      <div className="home-link">
        <Link to={PageRoots.Home}>ak.gg</Link>
      </div>
      <div className="navigation">
        <Link to={PageRoots.Music}>posts</Link>
        <Link to={PageRoots.Music}>music</Link>
      </div>
    </div>

  )
}