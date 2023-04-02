import { json, error } from '@sveltejs/kit'
import { collectNFTTracksFromNFTs, uniqueNFTs, tracksResponseFromNFTTracks } from '$lib/utils/tracks'

const WALLET_ADDRESS = process.env.WALLET_ADDRESS
const SPINDEX_API_BASE_URL = 'https://spindex-api.spinamp.xyz/v3'

// todo: investigate best way to get artist name
// (currently using nftByNftId.metadata.artist) 
const getTrackNFTsQuery = `
  query GetTrackNFTs($walletAddress: String!) {
    collectorById(id: $walletAddress) {
      nftsByOwner {
        edges {
          node {
            id
            nftsProcessedTracksByNftId {
              edges {
                node {
                  lossyArtworkUrl
                  lossyArtworkMimeType
                  lossyAudioUrl
                  description
                  artistId
                  title
                  websiteUrl
                  lossyAudioIpfsHash
                  lossyArtworkIpfsHash
                  lossyAudioMimeType
                  nftId
                  nftByNftId {
                    metadata
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  if (!WALLET_ADDRESS) {
    throw error(500, {
      message: 'wallet address not configured on server'
    })
  }

  const nftsRequest = await fetch(`${SPINDEX_API_BASE_URL}/graphql`, {
    headers: {
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "Referer": SPINDEX_API_BASE_URL,
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    method: 'POST',
    body: JSON.stringify({
      query: getTrackNFTsQuery,
      variables: {
        walletAddress: WALLET_ADDRESS,
      },
      operationName: 'GetTrackNFTs',
    })
  })

  const data = await nftsRequest.json()
  const nftNodes = data.data.collectorById.nftsByOwner.edges
  const trackNFTs = collectNFTTracksFromNFTs(uniqueNFTs(nftNodes))
  return json({ tracks: tracksResponseFromNFTTracks(trackNFTs) })
}