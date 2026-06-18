<template>
  <UError
    icon="i-lucide-file-x"
    :clear="{ label: 'Página inicial' }"
    :error="{
      status: 404,
      statusText: 'Página não encontrada',
      message: 'A página que você está procurando não existe.',
    }"
  />
</template>
