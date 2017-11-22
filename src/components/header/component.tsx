import * as React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export interface Props {}

export const Header: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <div className="header">
      <h4 className="title"><Link to="/">Andrew Kennedy</Link></h4>
      <ul className="menu">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  )
}
