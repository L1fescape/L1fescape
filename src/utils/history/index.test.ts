import { preserveScrollPosition } from './'
import { PageRoots } from 'ak/pages';

test('preserves scroll position of previous pages when navigating back', () => {
  let scrollPos = 0
  const history = [{
    pathname: PageRoots.Music,
    search: '',
    state: {},
    hash: '',
  }, {
    pathname: PageRoots.Home,
    search: '',
    state: {},
    hash: '',
  }]
  const getScrollPos = () => scrollPos
  const setScrollPos = jest.fn()
  const onRouteChange = preserveScrollPosition(getScrollPos, setScrollPos)

  // navigate to page 1 and scroll down
  onRouteChange(history[0], 'PUSH')
  expect(setScrollPos).toHaveBeenCalledWith(1000)
  scrollPos = 100
  // navigate to page 2 and scroll down again
  onRouteChange(history[1], 'PUSH')
  expect(setScrollPos).toHaveBeenCalledWith(0)
  scrollPos = 200
  // hit back button
  onRouteChange(history[1], 'POP')
  expect(setScrollPos).toHaveBeenCalledWith(200)
  // hit back button again
  onRouteChange(history[0], 'POP')
  expect(setScrollPos).toHaveBeenCalledWith(100)
})