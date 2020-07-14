import * as React from 'react'
import { Page } from 'l1/components'
import { RouteComponentProps } from 'react-router'
import './csgo.scss'

export const CS: React.FC<RouteComponentProps> = () => (
  <Page title="csgo" className="csgo">
    <p>servers</p>
  </Page>
)
