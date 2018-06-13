import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { Page } from 'ak.gg/components/page'

export const FourOhFour: React.StatelessComponent<{}> = () => (
  <Page>
    <div style={{marginTop: '4em', textAlign: 'center'}}>
      <p>
        Woops looks like I didn't make this page
      </p>
      <p>
        ❤️
      </p>
    </div>
  </Page>
)
