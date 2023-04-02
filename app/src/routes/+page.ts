import type { APITracksResponse } from '$lib/types/track'
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const trackResp = await fetch('/api/music-nfts')
  const trackData = await trackResp.json() as APITracksResponse
  return {
    tracks: trackData.tracks,
  }
}) satisfies PageLoad