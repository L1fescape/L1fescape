<template>
  <div class="home">
    <section class="hi">
      <div class="pic">
        <img class="profile" src="profile.jpg" />
      </div>
      <div class="blurb">
        <h2>hi! i'm andrew</h2>
        <p>
          i'm a programmer currently living in berlin. i really enjoy music and
          software.
          <!-- here on my website you'll find some spotify playlists with
          music i like, soundcloud links to sets i've mixed, and tracks i've
          been listening to lately. -->
        </p>
        <p>
          you can also find me elsewhere on the internet
          <ArrowSmDownIcon class="inline h-5 w-5 text-blue-500" />
        </p>
        <div class="socials">
          <SocialMedia />
        </div>
      </div>
    </section>

    <!-- <section class="music">
      <div class="title">
        <h2>music</h2>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class="mixes">
          <h3>mixes & live sets</h3>
          <SoundcloudMixes :loading="loading" :mixes="mixes" />
        </div>

        <div class="recent-tracks">
          <h3>what i've been listening to recently</h3>
          <LastfmTracks :loading="loading" :tracks="tracks" />
        </div>
      </div>
    </section>

    <section class="source">
      <div class="title">
        <h2>source</h2>
      </div>
      <div class="content">
        <p>this site is built using</p>
        <ul>
          <li>frontend: vue, tailwind, & cloudflare pages</li>
          <li>api: cloudflare workers</li>
          <li>ci/cd: github actions</li>
        </ul>
        <p>
          you can view the source code
          <a href="https://github.com/l1fescape/l1fescape.com">on github</a>
        </p>
      </div>
    </section> -->
  </div>
</template>

<script>
import { ArrowSmDownIcon } from "@heroicons/vue/solid";
import SocialMedia from "./components/SocialMedia.vue";
// import SoundcloudMixes from "./components/SoundcloudMixes.vue";
// import LastfmTracks from "./components/LastfmTracks.vue";
// import { getData } from "./utils/api";

export default {
  name: "App",
  components: {
    SocialMedia,
    // SoundcloudMixes,
    // LastfmTracks,
    ArrowSmDownIcon,
  },
  data() {
    return {
      loading: false,
      mixes: null,
      playlists: null,
      tracks: null,
      error: null,
    };
  },
  created() {
    // this.loading = true;
    // getData()
    //   .then((data) => {
    //     this.mixes = data.mixes;
    //     this.playlists = data.spotify_playlists;
    //     this.tracks = data.lastfm_tracks?.tracks?.toptracks?.track;
    //   })
    //   .catch((err) => (this.error = err))
    //   .finally(() => (this.loading = false));
  },
};
</script>

<style>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home section {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem;
}

.hi {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  box-sizing: border-box;
  max-width: 60rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.pic {
  display: flex;
  align-items: center;
  width: 12rem;
  height: 12rem;
}

.blurb {
  display: flex;
  flex-direction: column;
}

.profile {
  width: 12rem;
  height: 12rem;
  border-radius: 12rem;
  object-position: 0 60%;
  object-fit: cover;
  flex-shrink: 0;
}
</style>
