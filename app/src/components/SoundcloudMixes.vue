<template>
  <div v-if="loading">
    <p>loading...</p>
  </div>
  <div v-else>
    <div v-for="mix in mixes" :key="mix.soundcloud">
      <a target="_blank" :href="mix.url">{{ mix.title }}</a>
      <p v-if="mix.description">{{ mix.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoundcloudMixes",
  props: {
    loading: Boolean,
    mixes: Array,
  },
};
</script>
