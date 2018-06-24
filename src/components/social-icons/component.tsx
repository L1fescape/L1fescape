import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import './styles.scss'

export const icons = [
  ["https://twitch.tv/L1fescape", "twitch"],
  ["https://twitter.com/L1fescape", "twitter"],
  ["https://instagram.com/L1fescape", "instagram"],
  ["https://github.com/L1fescape", "github"],
  ["https://steamcommunity.com/id/l1fescape", "steam"],
  ["https://soundcloud.com/l1fescape", "soundcloud"],
]

export interface Props {
  showFull?: boolean
}

export const SocialIcons: React.StatelessComponent<Props> = (props) => (
  <div className={`social-icons ${!props.showFull ? 'row' : ''}`}>
    { icons.map((icon) => (
      <div key={icon[0]}>
        <a href={icon[0]} target="_blank">
          <FontAwesome name={icon[1]} />
          {props.showFull ? 'L1fescape' : ''}
        </a>
      </div>
    ))}
  </div>
)