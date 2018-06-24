import * as React from 'react'
import { Page } from 'ak.gg/components/page'
import { Circles } from './components/circles'
import './styles.scss'

export interface State {
  numCircles: number
}

export class Art extends React.Component<{}> {
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
        <div className="sidebar">
          <input type="number" value={this.state.numCircles} onChange={this.onNumCirclesChange} />
        </div>
        <div className="art">
          <Circles numCircles={this.state.numCircles} orbitRadius={2} positionRadius={10} />
        </div>
      </Page>
    )
  }
}