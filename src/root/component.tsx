import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Location } from 'history'

import { Home } from 'ak.gg/pages/home'
import { Posts, POSTS_ROOT } from 'ak.gg/pages/posts'
import { Music, MUSIC_ROOT } from 'ak.gg/pages/music'
import { Art, ART_ROOT } from 'ak.gg/pages/art'
import { FourOhFour } from 'ak.gg/pages/404'
import './styles.scss'

export interface Props {}

export const Root: React.StatelessComponent<Props> = (props: Props) => (
  <BrowserRouter>
    <div className="wrapper">
      <Switch>
      {/* <Switch location={{
        pathname: `${POSTS_ROOT}/heartbleed`,
        search: '',
        state: '',
        hash: '',
      }}> */}
        <Route exact path="/" component={Home} />
        <Route path={POSTS_ROOT} component={Posts} />
        <Route path={MUSIC_ROOT} component={Music} />
        <Route path={ART_ROOT} component={Art} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
)
