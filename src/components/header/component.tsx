import * as React from 'react'
import { Link } from 'react-router-dom'
import * as FontAwesome from 'react-fontawesome'
import './styles.scss'

const links: {to: string; title: string; className?: string}[] = [{
  to: '/art',
  title: 'Art',
  className: 'art',
}, {
  to: '/music',
  title: 'Music',
  className: 'music',
}, {
  to: '/posts',
  title: 'Posts',
  className: 'posts',
}]

function toggleFlyoutMenu() {}

export interface PublicProps {}

export class Header extends React.Component<PublicProps> {
  render() {
    return (
      <div className="header">
        <h4><Link to="/">ak.gg</Link></h4>
        <ul className="menu">
          { links.map(link => (
            <li key={link.to} className={link.className}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
