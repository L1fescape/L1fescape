import * as React from 'react'
import * as History from 'history';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import * as FontAwesome from 'react-fontawesome'
import './styles.scss'

const links: {to: string; title: string; className?: string}[] = [{
  to: '/code',
  title: 'Code',
  className: 'code',
}, {
  to: '/music',
  title: 'Music',
  className: 'music',
}, {
  to: '/blog',
  title: 'Blog',
  className: 'blog',
// }, {
//   to: '/minecraft',
//   title: 'Minecraft',
//   className: 'minecraft',
}]

function toggleFlyoutMenu() {}

export interface PublicProps {}

export type Props = PublicProps & RouteComponentProps<{
  location: History.Location
}>

export class HeaderComponent extends React.Component<Props> {
  render() {
    const { pathname } = this.props.location
    return (
      <div className="header">
        <h4><Link to="/">ak.gg{pathname !== "/" && pathname}</Link></h4>
        <ul className="menu">
          { links.map(link => (
            <li key={link.to} className={link.className}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="menu-expand"><FontAwesome name="bars" onClick={toggleFlyoutMenu} /></div>
      </div>
    )
  }
}

export const Header = withRouter(props => <HeaderComponent {...props} />)