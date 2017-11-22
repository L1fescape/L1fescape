import * as React from 'react'
import * as THREE from 'three'
import { Circles } from '../../components/circles'

import './styles.scss'

export interface Props {}

export class Home extends React.Component<Props> {
  render() {
    return [
      <div className="banner" key="banner">
        <div className="overlay"></div>
        <div className="inner">
          <h1>Andrew Kennedy</h1>
          <p>some bullshit</p>
        </div>
      </div>,
      <article key="hi">
        hihihi
      </article>,
      <article key="about">
        hihihi
      </article>,
      <article key="projects">
        hihihi
      </article>,
      <article key="blog">
        hihihi
      </article>,
    ]
  }
}
