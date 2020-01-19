import * as React from 'react'
import * as History from 'history'
import { Router, Switch } from 'react-router'
import { routes } from 'ak.gg'

export type RouterHistory = History.History<any>

export interface AppProps {
  history: RouterHistory
}

export const App = (props: AppProps) => (
  <Router history={props.history}>
    <Switch>{routes}</Switch>
  </Router>
)