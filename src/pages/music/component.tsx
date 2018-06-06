import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { Header } from 'ak.gg/components/header'

export const Music: React.StatelessComponent<{}> = () => (
  <div>
    <Header />
    <div style={{marginTop: '4em', textAlign: 'center'}}>
      <p>
        moooosic
      </p>
    </div>
  </div>
)
