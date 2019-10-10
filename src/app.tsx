import * as React from 'react'
import { useState } from 'react'
import { Header, HeaderContext } from 'ak.gg/components'
import { Router, RouterHistory } from 'ak.gg/router'
import './app.scss'

export interface AppProps {
  history: RouterHistory
}

export const App = (props: AppProps) => {
  const [ headerFixed, setHeaderFixed ]  = useState(false)
  const [ hideHomeLink, setHeaderHomeLinkVisible ] = useState(false)

  return (
    <HeaderContext.Provider value={{ setHeaderFixed, setHeaderHomeLinkVisible }}>
      <Router history={props.history}>
        <Header hideHomeLink={hideHomeLink} fixed={headerFixed} />
      </Router>
    </HeaderContext.Provider>
  )
}