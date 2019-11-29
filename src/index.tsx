import * as React from 'react'
import { useState } from 'react'
import * as History from 'history'
import { Router, Switch } from 'react-router'
import { Header, HeaderContext } from 'ak.gg/components'
import { routes } from 'ak.gg/routes'

export type RouterHistory = History.History<any>

export interface AppProps {
  history: RouterHistory
}

export const App = (props: AppProps) => {
  const [headerClassName, setHeaderClassName] = useState('')

  return (
    <HeaderContext.Provider
      value={{
        setClassName: setHeaderClassName,
      }}
    >
      <Router history={props.history}>
        <Header className={headerClassName} />
        <Switch>{routes}</Switch>
      </Router>
    </HeaderContext.Provider>
  )
}
