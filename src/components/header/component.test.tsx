import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import { Link } from 'react-router-dom'
import { Header, PublicProps } from './'
import { PageRoots } from 'ak.gg/pages'
import { withRouter, createHistory } from 'ak.gg/utils'

describe('Header', () => {
  let HeaderWithRouter: React.FC<PublicProps> = null

  beforeEach(() => {
    const history = createHistory()
    HeaderWithRouter = withRouter(Header, history)
  })

  it('should render header links correctly', () => {
    const renderer = TestRenderer.create(<HeaderWithRouter />)
    const wrapper = renderer.root
    const links = wrapper.findAllByType(Link)
    expect(links.length).toBeGreaterThan(0)
    expect(links[0].props.to).toBe(PageRoots.Home)
  })

  it('should support hiding the title', () => {
    const renderer = TestRenderer.create(<HeaderWithRouter hideHomeLink />)
    const wrapper = renderer.root
    const links = wrapper.findAllByType(Link)
    expect(links.length).toBeGreaterThan(0)
    expect(links[0].props.to).not.toBe(PageRoots.Home)
  })
})