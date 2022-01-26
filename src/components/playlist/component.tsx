import * as React from 'react'

import { Spotify } from './spotify'
import './style.scss'

export interface PlaylistProps {
  id: string
}

export const Playlist: React.FC<PlaylistProps> = ({ id }) => (
  <Spotify id={id} />
)
