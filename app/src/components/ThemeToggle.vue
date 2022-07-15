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

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/outline';
import { ref, watch } from 'vue';

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

function applyTheme(theme: string) {
  if (theme === DARK_THEME) {
    document.documentElement.classList.remove(LIGHT_THEME);
    document.documentElement.classList.add(DARK_THEME);
  } else {
    document.documentElement.classList.remove(DARK_THEME);
    document.documentElement.classList.add(LIGHT_THEME);
  }
}

const theme = ref(prefersDarkTheme() ? DARK_THEME : LIGHT_THEME);
applyTheme(theme.value)
watch(theme, applyTheme)

const toggleTheme = () => {
  if (theme.value === DARK_THEME) {
    theme.value = LIGHT_THEME
  } else {
    theme.value = DARK_THEME
  }
}


</script>
