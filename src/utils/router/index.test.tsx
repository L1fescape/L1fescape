import * as React from 'react'
import * as History from 'history'
import { Router } from './'
import { PageRoots, Home, Music, FourOhFour } from 'ak.gg/pages'
import * as TestRenderer from 'react-test-renderer'

describe('routing', () => {
  let history = null
  let wrapper: TestRenderer.ReactTestInstance = null

  beforeEach(() => {
    history = History.createBrowserHistory()
    wrapper = TestRenderer.create(<Router history={history} />).root
  })

  it('should route to each page correctly', () => {
    expect(wrapper.findByType(Home)).not.toBe(undefined)
    expect(wrapper.findByType(Music)).toBe(undefined)
    expect(wrapper.findByType(FourOhFour)).toBe(undefined)
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
})