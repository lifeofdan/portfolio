// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    githubAccessToken: ""
  },

  app: {
    head: {
      meta: [
        { name: "description", content: "Portfolio site for Daniel Newman" }
      ],
      htmlAttrs: {
        lang: "en"
      }
    }
  },

  image: {
    quality: 80,
    format: ["webp"]
  },

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon-tw",
    "@nuxt/content",
    "@nuxt/image"
  ],

  compatibilityDate: "2025-03-20"
});
