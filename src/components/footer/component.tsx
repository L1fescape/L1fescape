import * as React from 'react'
import { Link } from 'react-router-dom'
import * as FontAwesome from 'react-fontawesome'
import { siteLinks } from 'ak.gg/components/header'
import './styles.scss'

export const socialIcons = [
  ["https://twitch.tv/L1fescape", "twitch"],
  ["https://twitter.com/L1fescape", "twitter"],
  ["https://instagram.com/L1fescape", "instagram"],
  ["https://github.com/L1fescape", "github"],
  ["https://steamcommunity.com/id/l1fescape", "steam"],
  ["https://soundcloud.com/l1fescape", "soundcloud"],
]

export interface PublicProps {}

export class Footer extends React.Component<PublicProps> {
  render() {
    return (
      <div className="footer">
        <h4><Link to="/">ak.gg</Link></h4>
        <ul className="menu">
          { siteLinks.map(link => (
            <li key={link.to} className={link.className}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
      { socialIcons.map((icon) => (
        <li key={icon[0]}>
          <a href={icon[0]} target="_blank">
            <FontAwesome name={icon[1]} /> L1fescape
          </a>
        </li>
      ))}
      </div>
    )
  }
}
