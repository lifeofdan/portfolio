<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <article class="prose mb-8">
        <ContentRenderer :value="doc" />
        <div class="flex justify-center">
          <p class="text-sm text-secondary">
            Last updated:
            {{
              data?.updated_at
                ? new Date(data.updated_at).toDateString()
                : "Unknown"
            }}
          </p>
        </div>
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch<{ updated_at: string; error?: unknown }>(
  `/api/v1/github/${route.params.id}`,
);
</script>

<style scoped></style>
