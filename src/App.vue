<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/search">Search</RouterLink>
      <RouterLink to="/AddOrEdit">AddOrEdit</RouterLink>
    </nav>
  </div> -->
  <div class="container mb-4 pb-4">
    <RouterView />
  </div>
</template>

<style scoped></style>
