<template>
  <div class="random">
    <h1><RouterLink to="/">Home</RouterLink></h1>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style>
.random {
  min-height: 100vh;
  display: flex;
}
</style>
