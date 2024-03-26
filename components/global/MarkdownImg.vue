<template>
  <div>
    <NuxtImg
      :quality="quality"
      format="webp"
      :src="src"
      :width="width"
      :height="height"
      :alt="alt"
    />
  </div>
</template>

<script setup lang="ts">
defineProps(["src", "width", "height", "alt", "quality"]);
</script>

<style scoped></style>
