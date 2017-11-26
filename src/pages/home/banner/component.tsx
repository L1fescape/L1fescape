import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Element } from 'react-scroll'
import { Header } from '../../../components/header'
import './styles.scss'

export interface Props {}

export const Banner: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <div className="banner">
      <Element name="banner" />
      <Header hideTitle={true} />
      <div className="overlay"></div>
      <div className="inner">
        <h1>Andrew Kennedy</h1>
        <div className="social-media">
          <a href="https://twitch.tv/L1fescape" target="_blank"><FontAwesome name="twitch" /></a>
          <a href="https://twitter.com/L1fescape" target="_blank"><FontAwesome name="twitter" /></a>
          <a href="https://instagram.com/L1fescape" target="_blank"><FontAwesome name="instagram" /></a>
          <a href="https://github.com/L1fescape" target="_blank"><FontAwesome name="github" /></a>
          <a href="https://steamcommunity.com/id/l1fescape" target="_blank"><FontAwesome name="steam" /></a>
          <a href="https://soundcloud.com/l1fescape" target="_blank"><FontAwesome name="soundcloud" /></a>
        </div>
      </div>
    </div>
  )
}
