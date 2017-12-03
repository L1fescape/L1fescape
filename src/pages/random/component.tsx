import * as React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
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
        <input type="number" value={this.state.numCircles} onChange={this.onNumCirclesChange} />
        <Circles numCircles={this.state.numCircles} orbitRadius={10} positionRadius={2} />
      </div>
    )
  }
}