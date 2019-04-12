import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import { Link } from 'react-router-dom'
import { Header } from './'
import { PageRoots } from 'ak/pages'
import { withRouter, createHistory } from 'ak/utils'

test('render header links', () => {
  const history = createHistory()
  const HeaderWithRouter = withRouter(Header, history)
  const renderer = TestRenderer.create(<HeaderWithRouter />)
  const wrapper = renderer.root
  const links = wrapper.findAllByType(Link)
  expect(links.length).toBeGreaterThan(0)
  expect(links[0].props.to).toBe(PageRoots.Home)
})