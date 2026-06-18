<script lang="ts" setup>
const date = new Date();
const currentYear = date.getFullYear();

const socialLinks = [
  {
    label: "X",
    icon: "simple-icons:x",
    to: "https://x.com/erickleite338",
  },
  {
    label: "GitHub",
    icon: "simple-icons:github",
    to: "https://github.com/Erick-Leite/Advanced-Research-with-AI",
  },
  {
    label: "E-mail",
    icon: "simple-icons:gmail",
    to: "mailto:erickleite338@gmail.com",
  },
];
</script>

<template>
  <footer
    class="flex flex-wrap items-center justify-around gap-x-10 gap-y-4 border-t border-neutral-200 px-4 py-6 text-center text-sm shadow-sm dark:border-neutral-800"
  >
    <div>Pedro Erick • © {{ currentYear }} • Pesquisa Avançada com IA</div>

    <div class="flex flex-wrap justify-center gap-6">
      <UButton
        v-for="(socialLink, key) in socialLinks"
        :key
        :label="socialLink.label"
        :to="socialLink.to"
        variant="outline"
        color="neutral"
      >
        <UIcon :name="socialLink.icon" size="sm" />
      </UButton>
    </div>
  </footer>
</template>
