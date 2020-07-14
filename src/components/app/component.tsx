import * as React from 'react'
import * as History from 'history'
import { Redirect, Router, Route, Switch } from 'react-router'
import { Home, Code, Blog, CS, FourOhFour } from 'l1/pages'
import { routes } from 'l1/routes'

export type RouterHistory = History.History<any>

export interface AppProps {
  history: RouterHistory
}

export const App: React.FC<AppProps> = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route exact path={routes.home} render={Home} />
      <Route path={routes.blog} render={Blog} />
      <Route path={routes.code} render={Code} />
      <Route path={routes.cs} render={CS} />
      <Redirect from="/cs" to={routes.cs} />
      <Route render={FourOhFour} />
    </Switch>
  </Router>
)
