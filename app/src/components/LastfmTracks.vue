<template>
  <div v-if="loading">
    <p>loading...</p>
  </div>
  <div v-else>lol</div>
</template>

<script>
export default {
  name: "LastfmTracks",
  props: {
    loading: Boolean,
    mixes: Array,
  },
};
</script>
