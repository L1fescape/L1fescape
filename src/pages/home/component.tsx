import * as React from 'react'
import { Woulg } from 'ak.gg/components/woulg'
import { Link } from 'react-router-dom'
import { Routes } from 'ak.gg/router'
import { Page } from 'ak.gg/components'
import { Socials, Links } from 'ak.gg/components/socials'
import './styles.scss'

export const Home = () => (
  <Page className="home" noHeader noFooter pageSource={__filename}>
    <Woulg className="hi">
      <section>
        <div className="intro">
          <p>
            <strong>Andrew Kennedy</strong> is a software engineer and musician
            based in San Francisco, CA
          </p>
          <Socials hideTitle />
        </div>
      </section>
    </Woulg>
  </Page>
)
