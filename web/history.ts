import * as History from 'history'

export const createHistory = History.createBrowserHistory

export const preserveScrollPosition = (getScrollPos: () => number, setScrollPos: (pos: number) => void) => {
  let prevPage: History.Location | null = null
  const pagePositions: {[key: string]: number} = {}

  return (location: History.Location, action: History.Action) => {
    const { pathname } = location
    if (prevPage) {
      pagePositions[prevPage.pathname] = getScrollPos()
    }
    let y = 0
    if (action === 'POP' && pagePositions[pathname]) {
      y = pagePositions[pathname]
    }
    setScrollPos(y)
    prevPage = location
  }
}