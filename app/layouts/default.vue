<template>
  <div class="flex min-h-dvh flex-col gap-y-10">
    <AdvancedSearchHeader />

    <main class="flex-1 scrollbar-none overflow-x-scroll">
      <slot />
    </main>

    <AdvancedSearchFooter />
  </div>
</template>
