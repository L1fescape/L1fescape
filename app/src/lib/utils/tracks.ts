import type { APITrack } from "$lib/types/track"

const IPFS_GATEWAY = 'https://ipfs.musicos.xyz'

export function collectNFTTracksFromNFTs(nfts: any) {
  const allTrackEdges = nfts.reduce((acc: any, edge: any) => {
    acc = acc.concat(edge.node.nftsProcessedTracksByNftId.edges)
    return acc
  }, [])
  return allTrackEdges.map((edge: any) => edge.node)
}

export function uniqueNFTs(nfts: any) {
  const seenNFTIds = new Set()
  const uniqueNFTs: any = []
  nfts.forEach((nft: any) => {
    const nftId = nft.node.id.split('/')[0]
    if (!seenNFTIds.has(nftId)) {
      seenNFTIds.add(nftId)
      uniqueNFTs.push(nft)
    }
  })
  return uniqueNFTs
}

export function tracksResponseFromNFTTracks(nftTracks: any): APITrack[] {
  return nftTracks.map((track: any) => ({
    artworkURL: `${IPFS_GATEWAY}/${track.lossyArtworkIpfsHash}`,
    audioURL: `${IPFS_GATEWAY}/${track.lossyAudioIpfsHash}`,
    title: track.title,
    artist: track.nftByNftId.metadata.artist,
    url: track.websiteUrl,
  }))
}