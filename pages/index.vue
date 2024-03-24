<template>
  <div class="mb-24">
    <div class="avatar">
      <div class="w-24 rounded-full">
        <img src="https://avatars.githubusercontent.com/u/1669918?v=4" />
      </div>
    </div>

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
