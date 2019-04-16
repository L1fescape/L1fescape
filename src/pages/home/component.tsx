import * as React from 'react'
import { Page } from 'ak/components/page'
import { withWoulg } from 'ak/components/woulg'
import './styles.scss'

export const IntroPresentation = () => (
  <Page title="hi" className="intro" noFooter>
    <p>Andrew Kennedy is a software engineer and musician based in San Francisco, CA</p>
  </Page>
)

export const Intro = withWoulg(IntroPresentation)
export const Home = () => (
  <>
    <Intro />
    <Page className="posts" noHeader>
      <p>more content</p>
    </Page>
  </>
) 