<script lang="ts" setup>
const { data: page } = await useAsyncData("about", () => {
  return queryCollection("content").path("/about").first();
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
</script>

<template>
  <div class="container mx-auto px-4">
    <ContentRenderer v-if="page" :value="page" />

    <NotFoundPage v-else />
  </div>
</template>
