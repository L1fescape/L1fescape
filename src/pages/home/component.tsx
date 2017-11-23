import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Header } from '../../components/header'

import './styles.scss'

export interface Props {}

export class Home extends React.Component<Props> {
  render() {
    return [
      <div className="banner" key="banner">
        <Header hideTitle={true} />
        <div className="overlay"></div>
        <div className="inner">
          <h1>Andrew Kennedy</h1>
          <a href="https://twitch.tv/L1fescape" target="_blank"><FontAwesome name="twitch" /></a>
          <a href="https://twitter.com/L1fescape" target="_blank"><FontAwesome name="twitter" /></a>
          <a href="https://instagram.com/L1fescape" target="_blank"><FontAwesome name="instagram" /></a>
          <a href="https://github.com/L1fescape" target="_blank"><FontAwesome name="github" /></a>
          <a href="https://steamcommunity.com/id/l1fescape" target="_blank"><FontAwesome name="steam" /></a>
          <a href="https://soundcloud.com/l1fescape" target="_blank"><FontAwesome name="soundcloud" /></a>
        </div>
      </div>,
      <div className="sections" key="sections">
        <section>
          <div className="home">
            <div className="headshot">
              <img alt="avatar" src="/headshot.jpg" />
            </div>
            <div className="bio">
              <h2>Hi there!</h2>
              <p>
                I'm Andrew. I make music, write software, and blog about both.
                During the day I'm a Software Engineer at <a href="https://www.twitch.tv/">Twitch</a>.
                At night I work on <a href="https://github.com/L1fescape">open source projects</a> and
                <a href="https://soundcloud.com/L1fescape">make beats</a>.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="home">
            <div className="headshot">
              <img alt="avatar" src="/headshot.jpg" />
            </div>
            <div className="bio">
              <h2>Hi there!</h2>
              <p>
                I'm Andrew. I make music, write software, and blog about both.
                During the day I'm a Software Engineer at <a href="https://www.twitch.tv/">Twitch</a>.
                At night I work on <a href="https://github.com/L1fescape">open source projects</a> and
                <a href="https://soundcloud.com/L1fescape">make beats</a>.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="home">
            <div className="headshot">
              <img alt="avatar" src="/headshot.jpg" />
            </div>
            <div className="bio">
              <h2>Hi there!</h2>
              <p>
                I'm Andrew. I make music, write software, and blog about both.
                During the day I'm a Software Engineer at <a href="https://www.twitch.tv/">Twitch</a>.
                At night I work on <a href="https://github.com/L1fescape">open source projects</a> and
                <a href="https://soundcloud.com/L1fescape">make beats</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    ]
  }
}
