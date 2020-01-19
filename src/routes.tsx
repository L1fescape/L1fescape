import * as React from 'react'
import { Route } from 'react-router'
import { Pages, Blog, FourOhFour } from 'ak.gg/pages'
import { Posts } from 'cms.ak.gg'

export const routes = [
  // pages
  ...Pages.map(page => (
    <Route
      key={page.path}
      exact={page.exact}
      path={page.path}
      component={page.component}
    />
  )),
  // content
  ...Posts.map(post => (
    <Route
      key={post.path}
      path={post.path}
      component={Blog}
    />
  )),
  // misc
  <Route key="404" component={FourOhFour} />,
]
