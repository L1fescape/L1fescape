import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from 'ak.gg/pages/home'
import { Posts, POSTS_ROOT } from 'ak.gg/pages/posts'
import { Music } from 'ak.gg/pages/music'
import { Random } from 'ak.gg/pages/random'
import { FourOhFour } from 'ak.gg/pages/404'
import './styles.scss'

export interface Props {}

export const Root: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={POSTS_ROOT} component={Posts} />
          <Route path="/music" component={Music} />
          <Route path="/art" component={Random} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
