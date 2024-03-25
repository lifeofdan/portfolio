<template>
  <div class="mb-24">
    <PagesIndexIntro class="mt-4" />
    <PagesIndexFindMe class="mt-24" />
    <PagesIndexFeaturedProjects class="mt-24" />
    <PagesArticlesList
      :article-limit="3"
      title="recent articles"
      class="mt-24"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
