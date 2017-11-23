import * as React from 'react'
import { Link } from 'react-router-dom'
import * as FontAwesome from 'react-fontawesome'
import './styles.scss'

export interface PublicProps {
  toggleFlyoutMenu(): void
  hideTitle?: boolean
  fixed?: boolean
}

export const Header: React.StatelessComponent<PublicProps> = (props: PublicProps) => {
  return (
    <div className={`header ${typeof props.fixed !== undefined && props.fixed ? 'header-fixed' : ''}`}>
      { !props.hideTitle && <h4 className="title"><Link to="/">Andrew Kennedy</Link></h4> }
      <ul className="menu">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <div className="menu-expand"><FontAwesome name="bars" onClick={props.toggleFlyoutMenu} /></div>
    </div>
  )
}
