<template>
  <header>
    <ThemeToggle />
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import ThemeToggle from './components/ThemeToggle.vue';
</script>
