import * as React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Header } from 'ak.gg/components/header'
import { Circles } from './components/circles'

import './styles.scss'

export interface Props {
}

export interface State {
  numCircles: number
}

export class Random extends React.Component<Props> {
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
      <div>
        <Header />
        <div className="random">
          {/* <div className="sidebar">
            <input type="number" value={this.state.numCircles} onChange={this.onNumCirclesChange} />
          </div> */}
          <div className="main">
            <Circles numCircles={this.state.numCircles} orbitRadius={2} positionRadius={10} />
          </div>
        </div>
      </div>
    )
  }
}