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
            <img
              class="mb-2 rounded"
              src="https://lifeofdan-public.us-ord-1.linodeobjects.com/enrollable-logo.jpg"
              alt="Enrollable logo, a form with the letter e."
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
            <img
              class="mb-2 rounded"
              src="https://lifeofdan-public.us-ord-1.linodeobjects.com/relay-logo.png"
              alt="Relay logo image a computer with a reply arrow."
            />
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/projects/food_dairy_helper">
        <div
          class="flex justify-between border-b border-dotted hover:border-b-secondary"
          @mouseenter="hovering('fdh', true)"
          @mouseleave="hovering('fdh', false)"
        >
          <div class="self-end mb-2">
            <p>food dairy helper</p>
          </div>
          <div
            style="max-width: 24px"
            :class="isHovered.fdh ? 'animate-pulse' : ''"
          >
            <img
              class="mb-2 rounded"
              src="https://lifeofdan-public.us-ord-1.linodeobjects.com/fdh-logo.png"
              alt="Food diary helper logo."
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
  fdh: false
});

function hovering(project: "relay" | "eable" | "fdh", isHovering: boolean) {
  isHovered.value[project] = isHovering;
}
</script>

<style></style>
