<template>
  <div class="home">
    <section class="hi">
      <div class="pic">
        <img class="profile" src="img/profile.jpeg" />
      </div>
      <div class="blurb">
        <h2 class="text-3xl font-bold underline">hi! i'm andrew</h2>
        <p>
          i'm a programmer currently living in berlin. i really enjoy music and
          software. here on my website you'll find some spotify playlists with
          music i like, soundcloud links to sets i've mixed, tracks i've been
          listening to lately via last.fm, and a couple of my other projects. i
          post content here when i can but some playlists i update frequently,
          so check back for updates!
        </p>
        <p>
          <span>you can also find me elsewhere on the internet</span>
          <span class="arrow-icon">
            <img src="icons/arrow.svg" />
          </span>
        </p>
        <div class="socials">
          <SocialMedia />
        </div>
      </div>
    </section>

    <section class="music">
      <div class="title">
        <h2>music</h2>
      </div>
      <div class="content grid">
        <div id="soundcloud" class="mixes">
          <h3>mixes & live sets</h3>
          <SoundcloudMixes :loading="loading" :mixes="mixes" />
        </div>

        <div id="lastfm" class="recent-tracks">
          <h3>what i've been listening to recently</h3>
          <p>a few tunes that have been hitting my ears a lot recently*:</p>
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
          <li>frontend: vue, webpack, cloudflare pages</li>
          <li>api: cloudflare workers</li>
          <li>ci/cd: github actions</li>
        </ul>
        <p>
          you can view the source code
          <a href="https://github.com/l1fescape/l1fescape.com">on github</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import SocialMedia from "./components/SocialMedia.vue";
import SoundcloudMixes from "./components/SoundcloudMixes.vue";
import LastfmTracks from "./components/LastfmTracks.vue";
import { getData } from "./utils/api";

export default {
  name: "App",
  components: {
    SocialMedia,
    SoundcloudMixes,
    LastfmTracks,
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
    this.loading = true;
    getData()
      .then((data) => {
        this.mixes = data.mixes;
        this.playlists = data.spotify_playlists;
        this.tracks = data.lastfm_tracks?.tracks?.toptracks?.track;
      })
      .catch((err) => (this.error = err))
      .finally(() => (this.loading = false));
  },
};
</script>

<style>
@import "./styles/variables.css";

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
  margin: 0 0 calc(var(--padding) * 8);
}

.hi {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: var(--padding);
  box-sizing: border-box;
  max-width: 60rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.pic {
  display: flex;
  align-items: center;
  margin: var(--padding);
  width: 12rem;
  height: 12rem;
}

.blurb {
  display: flex;
  flex-direction: column;
  margin-right: var(--padding);
}

.profile {
  width: 12rem;
  height: 12rem;
  border-radius: 12rem;
  object-position: 0 60%;
  object-fit: cover;
  flex-shrink: 0;
}

.socials {
  display: flex;
  flex-wrap: wrap;
}

.socials a {
  margin-right: var(--padding);
  margin-top: calc(var(--padding) / 2);
}

.music {
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  box-sizing: border-box;
}

.music .grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(var(--gridSize) / 2), 1fr)
  );
}

.mixes {
  padding: var(--padding);
  padding-right: 0;
}

.mixes ul {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(var(--gridSize) / 2), 1fr)
  );
}

.mixes li {
  margin-right: var(--padding);
  margin-bottom: var(--padding);
}

.recent-tracks {
  padding: var(--padding);
}

.soundcloud-embed {
  max-width: 40rem;
  min-width: 10rem;
  height: 10rem;
  margin-bottom: 1rem;
}

.soundcloud-embed iframe {
  height: 100%;
  width: 100%;
}
</style>
