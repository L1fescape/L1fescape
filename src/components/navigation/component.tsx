import * as React from 'react'
import * as History from 'history'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { HOME_ROOT, BLOG_ROOT, MUSIC_ROOT, ART_ROOT } from 'ak.gg/constants'
import './styles.scss'

interface SiteLink {
  to: string;
  title?: string;
  className?: string
}

const homeLink: SiteLink = {
  to: HOME_ROOT,
}

export const HomeLink = () => (
  <h4 className="home-link">
    <Link to={homeLink.to}>ak.gg</Link>
  </h4>
)

export const siteLinks: SiteLink[] = [{
  to: ART_ROOT,
  title: 'Art',
  className: 'art',
// }, {
//   to: '/code',
//   title: 'Code',
//   className: 'code',
}, {
  to: BLOG_ROOT,
  title: 'Blog',
  className: 'posts',
}, {
  to: MUSIC_ROOT,
  title: 'Music',
  className: 'music',
}]

type Props = RouteComponentProps<{
  location: History.Location
}>

class NavigationPrsentation extends React.Component<Props> {
  render() {
    const { pathname } = this.props.location
    const maybeDirectoryMatch = pathname.match(/[^\/]*\/[^\/]*/) // matches top lvl dir (/art, /code, etc)
    const curPage = maybeDirectoryMatch ? maybeDirectoryMatch[0] : ''
    const curPageLink = siteLinks.find(link => link.to === curPage) || homeLink
    return (
      <ul className="menu">
        { siteLinks.map(link => (
          <li
            key={link.to}
            className={`${link.className} ${curPageLink === link ? 'active' : ''}`}
          >
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export const Navigation = withRouter(props => <NavigationPrsentation {...props} />)