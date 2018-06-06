import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { Header } from 'ak.gg/components/header'
import { Element as ScrollTarget } from 'react-scroll'
import { getArticleList } from 'ak.gg/utils/posts'

import './styles.scss'

const socialIcons = [
  ["https://twitch.tv/L1fescape", "twitch"],
  ["https://twitter.com/L1fescape", "twitter"],
  ["https://instagram.com/L1fescape", "instagram"],
  ["https://github.com/L1fescape", "github"],
  ["https://steamcommunity.com/id/l1fescape", "steam"],
  ["https://soundcloud.com/l1fescape", "soundcloud"],
]

// { socialIcons.map((icon) => (
//   <li key={icon[0]}>
//     <a href={icon[0]} target="_blank">
//       <FontAwesome name={icon[1]} />
//     </a>
//   </li>
// ))}

export const Home: React.StatelessComponent<{}> = () => (
  <div>
    <Header />
    <div className="inner">
      <h3>Writings</h3>
      {getArticleList().map(post => (
        <Link key={post.path} to={post.path}>
          {post.title}
        </Link>
      ))}
    </div>
  </div>
)
