import * as React from 'react'
import { Circles } from './components/circles'

import './styles.scss'

export interface Props {
}

export class CirclesPage extends React.Component<Props> {
  private elem: HTMLElement | null
  render() {
    return <Circles numCircles={3} orbitRadius={10} positionRadius={2} />
  }
}