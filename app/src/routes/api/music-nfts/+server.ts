import { error } from '@sveltejs/kit'
import type { NFT } from '$lib/types/nft'

const WALLET_ADDRESS=process.env.WALLET_ADDRESS

interface NFTResponse {
  nfts: NFT[]
}

const getNFTsQuery = `
  query GetNFTs($walletAddress: String!) {
    collectorById(id: $walletAddress) {
      nftsByOwner {
        nodes {
          nodeId
          metadata
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

  const nftsRequest = await fetch("https://spindex-api.spinamp.xyz/v1/graphql", {
    headers: {
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "Referer": "https://spindex-api.spinamp.xyz/v1/graphiql",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    method: 'POST',
    body: JSON.stringify({
      query: getNFTsQuery,
      variables: {
        walletAddress: WALLET_ADDRESS,
      },
      operationName: 'GetNFTs',
    })
  })

  const data = await nftsRequest.json()
  const nfts = data?.data.collectorById.nftsByOwner
  console.log(nfts)

  const resp: NFTResponse = {
    nfts,
  }
 
  return new Response(JSON.stringify(resp))
}