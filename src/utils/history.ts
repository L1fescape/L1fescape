import * as History from 'history'

export const preserveScrollPosition = () => {
  let prevPage: History.Location | null = null
  const pagePositions: {[key: string]: number} = {}

  return (location: History.Location, action: History.Action) => {
    const { pathname } = location
    if (prevPage) {
      pagePositions[prevPage.pathname] = window.scrollY
    }
    let y = 0
    if (action === 'POP' && pagePositions[pathname]) {
      y = pagePositions[pathname]
    }
    window.scrollTo(0, y)
    prevPage = location
  }
}