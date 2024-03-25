<template>
  <div class="mb-24">
    <div class="avatar">
      <div class="w-24 rounded-full">
        <img src="/images/profile_bg_blue_sm.jpg" />
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
