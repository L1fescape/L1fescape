import * as History from 'history'

export const createHistory = History.createBrowserHistory

const getScrollPos = () => window.scrollY
const setScrollPos = (position: number) => window.scrollTo(0, position)

export const preserveScrollPosition = () => {
  let prevPage: History.Location | null = null
  const pagePositions: { [key: string]: number } = {}

  return (location: History.Location, action: History.Action) => {
    const { pathname } = location
    if (prevPage) {
      pagePositions[prevPage.pathname] = getScrollPos()
    }
    let y = 0
    console.log(y)
    if (action === 'POP' && pagePositions[pathname]) {
      y = pagePositions[pathname]
    }
    setScrollPos(y)
    prevPage = location
  }
}
