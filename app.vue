<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
    <MainNav class="mt-4" />
    <NuxtPage class="mt-8" />
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - lifeofdan` : "lifeofdan";
  }
});
</script>
