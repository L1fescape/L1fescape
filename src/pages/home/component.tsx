import * as React from 'react'
import { Page } from 'ak/components/page'
import { Woulg } from 'ak/components/woulg'
import './styles.scss'

const Intro = () => (
  <Page title="hi" className="intro" noFooter hideHomeLink>
    <p>Andrew Kennedy is a software engineer and musician based in San Francisco, CA</p>
  </Page>
)
export const Home = () => (
  <>
    <Woulg>
      <Intro/>
    </Woulg>
    <Page className="posts" noHeader>
      <p>more content</p>
    </Page>
  </>
)