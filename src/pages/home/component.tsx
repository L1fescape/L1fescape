import * as React from 'react'
import { Page } from 'ak.gg/components/page'
import { Woulg } from 'ak.gg/components/woulg'
import './styles.scss'

const Intro = () => (
  <Page className="intro" noFooter hideHomeLink>
    <p><strong>Andrew Kennedy</strong> is a software engineer and musician based in San Francisco, CA</p>
  </Page>
)
export const Home = () => (
  <>
    <Woulg>
      <Intro/>
    </Woulg>
    <Page noHeader className="about">
      <section>
        <p>more content</p>
      </section>
    </Page>
  </>
)