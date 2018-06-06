import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { Header } from 'ak.gg/components/header'

export const FourOhFour: React.StatelessComponent<{}> = () => (
  <div>
    <Header />
    <div style={{marginTop: '4em', textAlign: 'center'}}>
      <p>
        Woops looks like I didn't make this page
      </p>
      <p>
        ❤️
      </p>
    </div>
  </div>
)
