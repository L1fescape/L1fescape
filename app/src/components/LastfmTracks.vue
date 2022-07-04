<template>
  <div v-if="loading">
    <p>loading...</p>
  </div>
  <div v-else>
    <div v-for="track in tracks" v-bind:key="track.url">
      {{ track.name }} - {{ track.artist.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "LastfmTracks",
  props: {
    loading: Boolean,
    tracks: Array,
  },
};
</script>
