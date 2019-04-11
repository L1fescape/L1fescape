import * as React from 'react'
import * as History from 'history'
import * as ReactDOM from 'react-dom'
import { preserveScrollPosition } from 'ak/utils/history'
import { Router, Route, Switch } from 'react-router'
import { Home, Music, FourOhFour, PageRoots } from 'ak/pages'
import './styles.scss'

const history = History.createBrowserHistory()
const getScrollPosition = () => window.scrollY
const setScrollPosition = (position: number) => window.scrollTo(0, position)
history.listen(preserveScrollPosition(getScrollPosition, setScrollPosition))

const App = () => (
  <Router history={history}>
    <div className="wrapper">
      <Switch>
        <Route exact path={PageRoots.Home} component={Home} />
        <Route path={PageRoots.Music} component={Music} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
