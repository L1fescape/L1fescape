import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from 'ak.gg/app'
import { createHistory, preserveScrollPosition } from './history'
import './styles.scss'

const history = createHistory()
const getScrollPosition = () => window.scrollY
const setScrollPosition = (position: number) => window.scrollTo(0, position)
history.listen(preserveScrollPosition(getScrollPosition, setScrollPosition))

ReactDOM.render(
  <App history={history} />,
  document.getElementById('root')
)
