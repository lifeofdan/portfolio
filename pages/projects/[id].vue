<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <article class="prose mb-8">
        <ContentRenderer :value="doc" />
        <div class="flex justify-center">
          <p class="text-sm text-secondary">
            Last updated:
            {{ doc.date ? new Date(doc.date).toDateString() : "Unknown" }}
          </p>
        </div>
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
