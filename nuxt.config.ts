// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-BR",
      },
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  nitro: {
    prerender: {
      routes: ["/persona", "/ai-search-filter"],
    },
  },
});
