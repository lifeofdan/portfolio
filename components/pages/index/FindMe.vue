<template>
  <div>
    <h2 class="uppercase mb-6">Find me on</h2>
    <div class="grid gap-4">
      <NuxtLink to="https://twitter.com/lifeofdandotme">
        <div
          class="flex justify-between border-b border-dotted hover:border-b-secondary"
        >
          <p class="text-md">Twitter</p>
          <Icon icon="bx:bxl-twitter" class="text-2xl mb-1" />
        </div>
      </NuxtLink>
      <NuxtLink to="https://github.com/lifeofdan">
        <div
          class="flex justify-between border-b border-dotted hover:border-b-secondary"
        >
          <p class="text-md inline-block align-middle">GitHub</p>
          <Icon icon="bx:bxl-github" class="text-2xl mb-1" />
        </div>
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/lifeofdan">
        <div
          class="flex justify-between border-b border-dotted hover:border-b-secondary"
        >
          <p class="text-md inline-block align-middle">Linkedin</p>
          <Icon icon="bx:bxl-linkedin-square" class="text-2xl mb-1" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
