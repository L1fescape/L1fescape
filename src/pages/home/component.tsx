import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { Page } from 'ak.gg/components/page'
import { Element as ScrollTarget } from 'react-scroll'
import { ArticleList } from 'ak.gg/pages/posts'

import './styles.scss'

export const Home: React.StatelessComponent<{}> = () => (
  <Page>
    <div className="home">
      <h3>Recent Posts</h3>
      <ArticleList />
      <h3>Art</h3>
    </div>
  </Page>
)
