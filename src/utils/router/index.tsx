import * as React from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router'
import { RouterHistory } from 'ak.gg/utils'
import { PageRoots, Home, Music, Art, FourOhFour } from 'ak.gg/pages'

export interface PublicProps {
  history: RouterHistory
}

export const Router: React.FC<PublicProps> = props => (
  <ReactRouter history={props.history}>
  {props.children || (
    <Switch>
      <Route path={PageRoots.Home} component={Home} />
      <Route path={PageRoots.Music} component={Music} />
      <Route path={PageRoots.Art} component={Art} />
      <Route component={FourOhFour} />
    </Switch>
  )}
  </ReactRouter>
)

export function withRouter<P>(Component: React.ComponentType<P>, history: RouterHistory): React.FC<P> {
  return (props: P) => {
    return (
      <Router history={history}>
        <Component {...props} />
      </Router>
    )
  }
} 