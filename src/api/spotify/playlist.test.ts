import { parsePlaylistId } from './playlist'

test('parses spotify playlist ids', () => {
  expect(parsePlaylistId('1IoSlQbiD7OZ7APX3tviuX')).toBe(
    '1IoSlQbiD7OZ7APX3tviuX'
  )
  expect(parsePlaylistId('spotify:playlist:1IoSlQbiD7OZ7APX3tviuX')).toBe(
    '1IoSlQbiD7OZ7APX3tviuX'
  )
  expect(
    parsePlaylistId(
      'https://open.spotify.com/playlist/1IoSlQbiD7OZ7APX3tviuX?si=1uNY_xZFQxK8iOXeIYlLfg'
    )
  ).toBe('1IoSlQbiD7OZ7APX3tviuX')
})
