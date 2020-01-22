export type Route = 'home' | 'code' | 'blog' | 'cs'

export const routes: { [key in Route]: string } = {
  home: '/',
  code: '/code',
  blog: '/blog',
  cs: '/cs',
}

export const routeText: { [key in Route]: string } = {
  home: 'ak.gg',
  code: 'code',
  blog: 'blog',
  cs: 'csgo',
}
