<template>
  <div class="home">
    <section class="hi">
      <div class="pic">
        <img class="profile rounded-full w-12 h-23" src="@/assets/profile.jpeg" />
      </div>
      <div class="blurb">
        <h2>hi! i'm andrew</h2>
        <p>
          i'm a programmer currently living in berlin. i really enjoy music and
          software.
        </p>
        <p>
          you can find more info about me elsewhere on the internet
          <ArrowSmDownIcon class="inline h-5 w-5 text-blue-500" />
        </p>
        <div class="socials">
          <SocialMedia />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowSmDownIcon } from '@heroicons/vue/solid';
import SocialMedia from '../components/SocialMedia.vue';
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home section {
  display: flex;
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
}

.blurb {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.profile {
  width: 12rem;
  height: 12rem;
  object-position: 0 60%;
  object-fit: cover;
  flex-shrink: 0;
}
</style>
