import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, createHistory, preserveScrollPosition } from 'ak.gg/utils'
import './styles.scss'

const history = createHistory()
const getScrollPosition = () => window.scrollY
const setScrollPosition = (position: number) => window.scrollTo(0, position)
history.listen(preserveScrollPosition(getScrollPosition, setScrollPosition))

ReactDOM.render(
  <Router history={history} />,
  document.getElementById('root')
)
