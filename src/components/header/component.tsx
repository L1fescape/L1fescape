import * as React from 'react'
import { Link } from 'react-router-dom'
import { PageRoots } from 'ak/pages'
import './styles.scss'

export const Header = () => (
  <div className="header">
    <div className="home-link">
      <Link to={PageRoots.Home}>ak.gg</Link>
    </div>
    <div className="navigation">
      <Link to={PageRoots.Music}>mooosic</Link>
    </div>
  </div>
)