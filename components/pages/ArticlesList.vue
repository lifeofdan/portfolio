<template>
  <div>
    <h1 class="uppercase mb-6">{{ title }}</h1>
    <ContentList :query="query" v-slot="{ list }">
      <template v-for="article in list" :key="article._path">
        <article class="prose mb-8">
          <NuxtLink class="no-underline" :to="article._path">
            <p class="m-0 grid grid-flow-col justify-between">
              <span class="text-secondary hover:text-neutral-content">
                {{ article.title }}
              </span>
              <span class="text-xs">{{ parseDate(article.date) }}</span>
            </p>
          </NuxtLink>
          <p class="m-0 font-thin italic text-sm">
            {{ article.description }}
          </p>
        </article>
      </template>
    </ContentList>

    <template v-if="articleLimit">
      <div class="flex justify-center">
        <div>
          <NuxtLink to="/articles">
            <div
              @mouseenter="isHovered = true"
              @mouseleave="isHovered = false"
              class="text-sm"
              :class="isHovered ? 'text-secondary' : ''"
            >
              All Articles
              <Icon
                class="ml-2 text-lg"
                :class="isHovered ? 'animate-bounce-x' : ''"
                icon="bx:right-arrow-alt"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const props = defineProps<{ articleLimit?: number; title: string }>();
const { articleLimit } = toRefs(props);
const query: QueryBuilderParams = {
  path: "/articles",
  limit: articleLimit.value,
  sort: [{ date: -1 }]
};
const isHovered = ref(false);
const parseDate = (date?: string): string =>
  date ? new Date(date).toDateString() : "";
</script>

<style></style>
