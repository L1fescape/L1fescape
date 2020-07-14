export type Route = 'home' | 'code' | 'blog' | 'cs' | 'music'

export const routes: { [key in Route]: string } = {
  home: '/',
  code: '/code',
  blog: '/blog',
  cs: '/csgo',
  music: '/music',
}

export const routeText: { [key in Route]: string } = {
  home: 'home',
  code: 'code',
  blog: 'blog',
  cs: 'csgo',
  music: 'music',
}
