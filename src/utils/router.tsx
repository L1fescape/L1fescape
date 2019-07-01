import * as React from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router'
import { RouterHistory } from 'ak.gg/utils'
import { Home, Projects, Blog, FourOhFour } from 'ak.gg/pages'
import { string } from 'prop-types';

export interface PublicProps {
  history: RouterHistory
}

export enum Routes {
  Home = '/',
  About = '/about',
  Blog = '/blog',
  Projects= '/projects',
}

interface Page {
  component: () => JSX.Element,
  text: string,
  path: Routes,
  exact?: boolean,
}

export const Pages: Page[] = [
  { component: Home, text: 'ak.gg', path: Routes.Home, exact: true },
  { component: Projects, text: 'projects', path: Routes.Projects, },
  { component: Blog, text: 'blog', path: Routes.Blog, },
]
export const RouteToPageMap = new Map<Routes, Page>(Pages.map(page => [page.path, page]))

export const Router: React.FC<PublicProps> = props => (
  <ReactRouter history={props.history}>
  {props.children || (
    <Switch>
      { Pages.map(page => {
        return (
          <Route
            key={page.path}
            exact={page.exact}
            path={page.path}
            component={page.component}
          />
        )
      })}
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