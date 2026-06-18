<script lang="ts" setup>
useHead({
  meta: [
    {
      name: "google-adsense-account",
      content: "ca-pub-4379359819260964",
    },
  ],
  script: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4379359819260964",
      async: true,
      crossorigin: "anonymous",
    },
  ],
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
