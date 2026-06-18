<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <label class="grid grid-cols-1 items-center gap-4 py-3 md:grid-cols-6">
    <div class="text-base font-medium md:col-span-2">
      {{ label }}
    </div>

    <div class="md:col-span-4">
      <slot />
    </div>
  </label>
</template>
