import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from 'ak.gg/pages/home'
import { Blog } from 'ak.gg/pages/blog'
import { Random } from 'ak.gg/pages/random'
import './styles.scss'

export interface Props {}

export const Root: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/r" component={Random} />
      </div>
    </BrowserRouter>
  )
}
