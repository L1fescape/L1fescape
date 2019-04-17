import * as React from 'react'
import { Page } from 'ak.gg/components/page'
import { Woulg } from 'ak.gg/components/woulg'
import './styles.scss'

const Neato = () => (
  <Woulg lineCount={50} component="span" contentClassName="neato">neato</Woulg>
)

export const Art = () => (
  <Page title="oh sick">
    <p>how <Neato /> is that</p>
  </Page>
)