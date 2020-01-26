import * as React from 'react'
import { Page } from 'ak.gg/components'
import { RouteComponentProps } from 'react-router'
import './csgo.scss'

export const CounterStrike: React.FC<RouteComponentProps> = () => (
  <Page title="csgo" className="csgo">
    <p>servers</p>
  </Page>
)
