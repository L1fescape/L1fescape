import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Element } from 'react-scroll'
import { Header } from '../../components/header'

import './styles.scss'
import './headshot.jpg'

export interface Props {}

export class Home extends React.Component<Props> {
  render() {
    return [
      <div className="banner" key="banner">
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
      </div>,
      <Element className="about" name="about" key="about">
        <div className="inner">
          <div className="headshot">
            <img alt="avatar" src="./headshot.jpg" />
          </div>
          <div className="bio">
            <h2>Hi there!</h2>
            <p>
              I'm Andrew. I like writing music, skateboarding, and making things with code. During the day I'm a Software Engineer at <a href="https://www.twitch.tv/">Twitch</a>.
              At night I work on <a href="https://github.com/L1fescape">open source projects</a> and <a href="https://soundcloud.com/L1fescape">make beats</a>.
            </p>
          </div>
        </div>
      </Element>,
      <Element className="projects" name="projects" key="projects">
        <div className="inner">
          <div className="card">
            <h2>Overlay</h2> 
            <small>January 2017</small>
            <p>Lots of broadcasters on Twitch showcase most recent subscribers, top donators, sponsors, and other info on top of their stream via an overlay. Most broadcasters use third-party sites to achieve this. My goal with Twitch Overlay is to allow users to create overlay themes and share them with other users. It's also an open source projects, so users can run it locally and modify to suit their needs.</p>
          </div>
          <div className="card">
            Tetris
          </div>
          <div className="card">
            conga
          </div>
        </div>
      </Element>,
      <Element className="footer" name="footer" key="footer">
        <div className="inner">
          <p>stuffffff</p>
          <p>stuffffff</p>
        </div>
      </Element>
    ]
  }
}
