<template>
  <button
    type="button"
    class="absolute top-0 right-0 p-2"
    v-on:click="toggleTheme"
    aria-label="Toggle Theme"
    title="Toggle Theme"
  >
    <SunIcon class="w-8 h-8" v-show="theme === DARK_THEME" />
    <MoonIcon class="w-8 h-8" v-show="theme === LIGHT_THEME" />
  </button>
</template>

<script lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/outline';

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function prefersDarkTheme() {
  if (
    localStorage.theme === DARK_THEME ||
    (!('theme' in localStorage) &&
      window.matchMedia(`(prefers-color-scheme: ${DARK_THEME})`).matches)
  ) {
    return true;
  }
  return false;
}

export default {
  name: 'ThemeToggle',
  components: {
    MoonIcon,
    SunIcon,
  },
  data() {
    const theme = prefersDarkTheme() ? DARK_THEME : LIGHT_THEME;
    // todo: should this be here?
    if (theme === DARK_THEME) {
      document.documentElement.classList.add(DARK_THEME);
    }
    return {
      theme,
      DARK_THEME,
      LIGHT_THEME,
    };
  },
  watch: {
    theme(newTheme) {
      localStorage.theme = newTheme;
      if (newTheme === DARK_THEME) {
        document.documentElement.classList.remove(LIGHT_THEME);
        document.documentElement.classList.add(DARK_THEME);
      } else {
        document.documentElement.classList.remove(DARK_THEME);
        document.documentElement.classList.add(LIGHT_THEME);
      }
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    },
  },
};
</script>
