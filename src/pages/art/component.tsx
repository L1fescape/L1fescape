import * as React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Page } from 'ak.gg/components/page'
import { Circles } from './components/circles'

import './styles.scss'
export const ART_ROOT = '/art'

export interface PublicProps { }

export interface State {
  numCircles: number
}

export class Art extends React.Component<PublicProps> {
  state = {
    numCircles: 40,
  }

  private onNumCirclesChange = (e) => {
    this.setState({
      numCircles: e.target.value
    })
  }

  render() {
    return (
      <Page>
        <div className="random">
          {/* <div className="sidebar">
            <input type="number" value={this.state.numCircles} onChange={this.onNumCirclesChange} />
          </div> */}
          <div className="main">
            <Circles numCircles={this.state.numCircles} orbitRadius={2} positionRadius={10} />
          </div>
        </div>
      </Page>
    )
  }
}