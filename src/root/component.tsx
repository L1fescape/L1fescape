import * as React from 'react'
import * as History from 'history'
import { Router, Route, Switch } from 'react-router'
import { Home } from 'ak.gg/pages/home'
import { Blog } from 'ak.gg/pages/blog'
import { Music } from 'ak.gg/pages/music'
import { Art } from 'ak.gg/pages/art'
import { FourOhFour } from 'ak.gg/pages/404'
import { preserveScrollPosition } from 'ak.gg/utils/history'
import { HOME_ROOT, BLOG_ROOT, MUSIC_ROOT, ART_ROOT } from 'ak.gg/constants'
import './styles.scss'

const history = History.createBrowserHistory()
history.listen(preserveScrollPosition())

export const Root: React.StatelessComponent<{}> = () => (
  <Router history={history}>
    <div className="wrapper">
      <Switch>
        <Route exact path={HOME_ROOT} component={Home} />
        <Route path={BLOG_ROOT} component={Blog} />
        <Route path={MUSIC_ROOT} component={Music} />
        <Route path={ART_ROOT} component={Art} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
)
