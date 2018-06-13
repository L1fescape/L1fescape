import * as React from 'react'
import * as History from 'history'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import './styles.scss'

interface SiteLink {
  to: string;
  title?: string;
  className?: string
}

const homeLink: SiteLink = {
  to: '/',
}

export const siteLinks: SiteLink[] = [{
  to: '/art',
  title: 'Art',
  className: 'art',
}, {
  to: '/posts',
  title: 'Posts',
  className: 'posts',
}, {
  to: '/code',
  title: 'Code',
  className: 'code',
}, {
  to: '/music',
  title: 'Music',
  className: 'music',
}]

export type PublicProps = RouteComponentProps<{
  location: History.Location
}>

class HeaderPresentation extends React.Component<PublicProps> {
  render() {
    const { pathname } = this.props.location
    const maybePageMatch = pathname.match(/[^\/]*\/[^\/]*/)
    const currentPage = maybePageMatch ? maybePageMatch[0] : ''
    const currentPageLink = siteLinks.find(link => link.to === currentPage) || homeLink
    return (
      <div className="header">
        <h4 className={currentPageLink.className}><Link to="/">ak.gg</Link></h4>
        <ul className="menu">
          { siteLinks.map(link => (
            <li key={link.to} className={link.className}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export const Header = withRouter(props => <HeaderPresentation {...props} />)