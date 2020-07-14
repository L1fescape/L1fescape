import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from 'l1'
import { createHistory, preserveScrollPosition } from './history'
import './index.scss'

const history = createHistory()
history.listen(preserveScrollPosition())

ReactDOM.render(<App history={history} />, document.getElementById('root'))
