// https://github.com/spinamp/spindexer/blob/main/src/types/record.ts
export type EVMBlockNumberField = {
  createdAtBlockNumber?: string;
}

export type DateTimeField = {
  createdAtTime: Date;
}

export type TimeField = EVMBlockNumberField & DateTimeField;

export type IdField = {
  id: string
}

export type Record = IdField & TimeField

// https://github.com/spinamp/spindexer/blob/main/src/types/track.ts
export type ProcessedTrackAudio = { lossyAudioURL: string } | { lossyAudioIPFSHash: string };
export type ProcessedTrackArtwork = { lossyArtworkURL: string } | { lossyArtworkIPFSHash: string };

export type ProcessedTrack = Record & {
  platformInternalId: string;
  title: string;
  slug: string;
  platformId: string;
  description?: string;
  websiteUrl?: string;
  artistId: string;
} & ProcessedTrackAudio & ProcessedTrackArtwork;