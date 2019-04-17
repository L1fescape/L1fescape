import * as React from 'react'
import * as History from 'history'
import { Router } from './'
import { PageRoots, Home, Music, FourOhFour } from 'ak.gg/pages'
import * as TestRenderer from 'react-test-renderer'

test('render correct pages based on route', () => {
  const history = History.createBrowserHistory()
  const renderer = TestRenderer.create(<Router history={history} />)
  const wrapper = renderer.root
  expect(wrapper.findAllByType(Home).length).toBe(1)
  expect(wrapper.findAllByType(Music).length).toBe(0)
  expect(wrapper.findAllByType(FourOhFour).length).toBe(0)
  history.push(PageRoots.Music)
  expect(wrapper.findAllByType(Home).length).toBe(0)
  expect(wrapper.findAllByType(Music).length).toBe(1)
  expect(wrapper.findAllByType(FourOhFour).length).toBe(0)
  history.push('blahhhh')
  expect(wrapper.findAllByType(Home).length).toBe(0)
  expect(wrapper.findAllByType(Music).length).toBe(0)
  expect(wrapper.findAllByType(FourOhFour).length).toBe(1)
  history.push(PageRoots.Home)
  expect(wrapper.findAllByType(Home).length).toBe(1)
  expect(wrapper.findAllByType(Music).length).toBe(0)
  expect(wrapper.findAllByType(FourOhFour).length).toBe(0)
})