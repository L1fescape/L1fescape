import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Element } from 'react-scroll'
import { Header } from '../../components/header'
import { Banner } from './banner'

import './styles.scss'
import './headshot.jpg'
import './tetris.png'

export interface TetrisGame {
  init(): void
}

declare var window: {
  Tetris(options: any): TetrisGame
}

export interface Props {}

export interface State {
  tetrisStarted: boolean
  tetris: TetrisGame | void
}

export class Home extends React.Component<Props, State> {
  private tetrisRef: HTMLElement | null
  private scoreRef: HTMLElement | null
  state: State = {
    tetrisStarted: false,
    tetris: undefined,
  }

  componentDidMount() {
    if (this.tetrisRef && this.scoreRef) {
      const game = window.Tetris({ 
        gameBoard : this.tetrisRef,
        scoreBlock: this.scoreRef,
        autostart : false,
        blockSize: 20,
        width: 20,
        height: 30,
        eventListener : document.onkeydown
      })
      this.setState({
        tetris: game,
      })
    }
  }

  private startTetris = () => {
    if (!this.state.tetrisStarted && this.state.tetris) {
      this.setState({
        tetrisStarted: true,
      })
      this.state.tetris.init()
    }
  }

  render() {
    return [
      <Banner key="banner" />,
      <Element className="about" name="about" key="about">
        <div className="inner">
          <div className="headshot">
            <img alt="avatar" src="./headshot.jpg" />
          </div>
          <div className="bio">
            <h2>Hi there!</h2>
            <p>
              I'm Andrew. I like writing music, skateboarding, and making things with code. During the day I'm a Software Engineer at <a target="_blank" href="https://www.twitch.tv/">Twitch</a>.
              At night I work on <a target="_blank" href="https://github.com/L1fescape">open source projects</a> and <a target="_blank" href="https://soundcloud.com/L1fescape">make beats</a>.
            </p>
          </div>
        </div>
      </Element>,
      <Element className="projects" name="projects" key="projects">
        <div className="inner">
          <div className="col">
            <div className="card overlay">
              <div className="info">
                <h2>Twitch Overlay</h2> 
                <small>November 2016</small>
              </div>
              <div className="meta">
                <a target="_blank" href="https://github.com/l1fescape/twitch-overlay"><FontAwesome name="github" />l1fescape/twitch-overlay</a>
              </div>
              <p>
                Broadcasters on Twitch display their most recent subscribers, top donators, sponsors, current song, and other various bits of info on top of their stream
                via an overlay. Most broadcasters use third-party sites to achieve this. My goal with this project is to allow users to create overlay themes and
                share them with other users.
              </p>
              <div>
                <img src="https://clips-media-assets.twitch.tv/vod-106955238-offset-2188-preview.jpg" />
              </div>
            </div>
            <div className="card conga">
              <div className="info">
                <h2>Conga</h2> 
                <small>September 2016</small>
              </div>
              <div className="meta">
                <a target="_blank" href="https://github.com/l1fescape/conga"><FontAwesome name="github" />l1fescape/conga</a>
              </div>
              <p>
                A few friends and I got together over the course of a weekend and created a VR game that lets you play the congas! The game uses <a target="_blank" href="https://unity3d.com/">Unity</a> for 
                its engine and tracks head, hand, and finger movements via a <a target="_blank" href="https://www.leapmotion.com/">Leap Motion</a> mounted on top of 
                an <a target="_blank" href="https://developer.oculus.com/blog/open-source-release-of-rift-dk2/">Oculus Rift DK2</a>.
              </p>
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-version="7"
                style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'658px', padding:0, width:'99.375%'}}>
                  <div style={{padding:'8px'}}>
                    <div style={{background:'#F8F8F8', lineHeight:0, marginTop:'40px', padding:'50.0% 0', textAlign:'center', width:'100%'}}>
                      <div style={{background:'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC)', display:'block', height:'44px', margin:'0 auto -44px', position:'relative', top:'-22px', width:'44px'}}></div>
                    </div>
                    <p style={{margin:'8px 0 0 0', padding:'0 4px'}}> 
                      <a href="https://www.instagram.com/p/BKln421Aw7p/" style={{color: '#000', fontFamily: 'Arial,sans-serif', fontSize:'14px', fontStyle:'normal', fontWeight:'normal', lineHeight:'17px', textDecoration:'none', wordWrap:'break-word'}} target="_blank">
                        We made a game in VR! github.com/l1fescape/conga
                      </a>
                    </p>
                    <p style={{color:'#c9c8cd', fontFamily:'Arial,sans-serif', fontSize:'14px', lineHeight:'17px', marginBottom:0, marginTop:'8px', overflow:'hidden', padding:'8px 0 7px', textAlign:'center', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                      A post shared by Andrew Kennedy (@l1fescape) on <time style={{fontFamily:'Arial,sans-serif', fontSize:'14px', lineHeight:'17px'}}>Sep 20, 2016 at 11:30am PDT</time>
                    </p>
                  </div>
              </blockquote>
            </div>
          </div>
          <div className="col">
            <div className="card tetris">
              <div className="info">
                <h2>Tetris</h2> 
                <small>May 2014</small>
              </div>
              <div className="meta">
                <a target="_blank" href="https://github.com/L1fescape/tetris"><FontAwesome name="github" />l1fescape/tetris</a>
              </div>
              <p>A very minimal version of Tetris with zero dependencies. Use your keyboard arrows to move and rotate pieces. Rotations still need tweaking (I'm not doing matrix rotations correctly) and it needs to be adapted to work on mobile.</p>
              <p>Fixes coming soon™</p>
              <div className="tetris-game">
                <p style={{display: 'none'}}>Score: <span ref={(ref) => this.scoreRef= ref}></span></p>
                <div style={{opacity: this.state.tetrisStarted ? 0 : 1}} className="tetris-placeholder">
                  <button onClick={this.startTetris}>Start Game</button>
                </div>
                <canvas ref={(ref) => this.tetrisRef = ref}></canvas>
              </div>
            </div>
          </div>
        </div>
      </Element>,
      <Element className="footer" name="footer" key="footer">
      </Element>
    ]
  }
}
