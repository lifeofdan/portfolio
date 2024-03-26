<template>
  <div>
    <div class="bg-transparent rounded">
      <div class="flex justify-between">
        <div class="avatar">
          <div class="w-14 sm:w-24 rounded-full">
            <NuxtImg
              src="/images/profile_bg_blue_sm.webp"
              alt="Profile image with blue background"
              width="96"
              height="96"
              quality="80"
              format="webp"
            />
          </div>
        </div>
        <ul class="menu menu-horizontal self-center">
          <li>
            <NuxtLink to="/"> Home </NuxtLink>
          </li>
          <li class="mx-2 sm:mx-4">
            <NuxtLink to="/projects"> Projects </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/articles"> Articles </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
