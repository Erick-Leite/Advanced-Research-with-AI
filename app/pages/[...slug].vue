<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});

definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="container mx-auto px-3 py-4">
    <ContentRenderer v-if="page" :value="page" />

    <NotFoundPage v-else />
  </div>
</template>
