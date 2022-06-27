<template>
  <div v-if="loading">
    <p>loading...</p>
  </div>
  <div v-else>
    <div v-for="mix in mixes" :key="mix.soundcloud">
      <div v-if="mix.soundcloud" className="soundcloud-embed">
        <iframe
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${mix.soundcloud}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`"
        ></iframe>
      </div>
      <p v-if="mix.description">{{ mix.description }}</p>
      <p v-if="mix.url"><a :href="mix.url">listen on soundcloud</a></p>
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
