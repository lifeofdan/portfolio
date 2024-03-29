<template>
  <div>
    <h2 class="uppercase mb-6">{{ title }}</h2>
    <div class="grid gap-4">
      <NuxtLink to="/projects/enrollable">
        <div
          class="flex justify-between border-b border-dotted hover:border-b-secondary"
          @mouseenter="hovering('eable', true)"
          @mouseleave="hovering('eable', false)"
        >
          <div class="self-end mb-2">
            <p>enrollable</p>
          </div>
          <div
            style="max-width: 24px"
            :class="isHovered.eable ? 'animate-pulse' : ''"
          >
            <NuxtPicture
              alt="Enrollable logo, a form with the letter e."
              class="mb-2 rounded"
              src="/images/enrollable-logo.webp"
              width="24"
              height="27"
              quality="80"
            />
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/projects/relay">
        <div
          class="flex justify-between border-b border-dotted hover:border-b-secondary"
          @mouseenter="hovering('relay', true)"
          @mouseleave="hovering('relay', false)"
        >
          <div class="self-end mb-2">
            <p>relay</p>
          </div>
          <div
            style="max-width: 24px"
            :class="isHovered.relay ? 'animate-pulse' : ''"
          >
            <NuxtPicture
              class="mb-2 rounded"
              src="/images/relay-logo.webp"
              alt="Relay logo image a computer with a reply arrow."
              width="24"
              height="24"
              quality="80"
            />
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/projects/food_diary_helper">
        <div
          class="flex justify-between border-b border-dotted hover:border-b-secondary"
          @mouseenter="hovering('fdh', true)"
          @mouseleave="hovering('fdh', false)"
        >
          <div class="self-end mb-2">
            <p>food diary helper</p>
          </div>
          <div
            style="max-width: 24px"
            :class="isHovered.fdh ? 'animate-pulse' : ''"
          >
            <NuxtPicture
              alt="Food diary helper logo."
              class="mb-2 rounded"
              src="/images/fdh-logo.webp"
              width="24"
              height="24"
              quality="80"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>();
const isHovered = ref<{ relay: boolean; eable: boolean; fdh: boolean }>({
  relay: false,
  eable: false,
  fdh: false,
});

function hovering(project: "relay" | "eable" | "fdh", isHovering: boolean) {
  isHovered.value[project] = isHovering;
}
</script>

<style></style>
