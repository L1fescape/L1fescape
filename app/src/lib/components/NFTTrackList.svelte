<script lang="ts">
	import type { APITrack } from '$lib/types/track';

  export let tracks: APITrack[] = []
  
  // only allow one player to play at a time
  let currentlyPlayingAudioEl: HTMLAudioElement | undefined
  function onPlaySong({ target: audioEl }: any) {
    if (audioEl !== currentlyPlayingAudioEl) {
      currentlyPlayingAudioEl?.pause()
      currentlyPlayingAudioEl = audioEl
    }
  }
</script>

<style>
  .nft {
    display: flex;
    flex-direction: column;
    background-size: cover;
    aspect-ratio: 1;
    align-items: flex-start;
    position: relative;
  }

  .info {
    padding: 0.5rem;
    margin-top: 1rem;
  }

  .audio {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
    display: flex;
  }
</style>

{#each tracks as track}
  <div class="nft" style={`background-image: url(${track.artworkURL});`}>
    <div class="info bg-neutral-800">
      <h2>
        <a href={track.url} rel="noreferrer" target="_blank">
          {track.title} by {track.artist}
        </a>
      </h2>
    </div>
    <div class="audio">
      <audio controls src={track.audioURL} on:play={onPlaySong} />
    </div>
  </div>
{/each}