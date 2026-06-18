<template>
  <header
    class="flex w-full flex-wrap items-center justify-between gap-4 border-b border-neutral-200 px-6 py-4 shadow-xs dark:border-neutral-800"
  >
    <ULink
      to="/"
      class="overflow-hidden transition-transform duration-200 ease-out active:scale-110"
      aria-label="Página inicial"
      ><img src="/favicon.svg" alt="" class="size-16 scale-125"
    /></ULink>

    <ULink class="text-xl font-medium" to="/about">Sobre</ULink>
  </header>
</template>
