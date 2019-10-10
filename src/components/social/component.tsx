import * as React from 'react'
import { icons } from './icons'
import './styles.scss'


export interface SocialProps {
  names?: boolean
}

export const SocialIcons: React.FC<SocialProps> = props => {
  return (
    <div className="social">
      {icons.map(icon => (
        <a
          key={icon.title}
          title={icon.title}
          className={icon.title.toLowerCase()}
          href={icon.title}
          target="_blank"
          rel="me">
          {icon.icon}
          {props.names && icon.title}
        </a>
      ))}
    </div>
  )
}