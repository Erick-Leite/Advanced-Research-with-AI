<script setup lang="ts">
import {
  FILE_TYPE_OPTIONS,
  LANGUAGE_OPTIONS,
  REGION_OPTIONS,
  AI_ASSISTANT_MODELS,
} from "~/constants/search-options";
import { useAdvancedSearchAi } from "~/composables/useAdvancedSearchAi";

const {
  searchQuery,
  AIExtraSearchFilter,
  AIAssistant,
  copyAiSearchPrompt,
  executeSearchAi,
} = useAdvancedSearchAi();
</script>

<template>
  <UForm
    :state="searchQuery"
    class="mx-auto max-w-6xl px-4"
    @submit="executeSearchAi"
  >
    <h1
      aria-label="Pesquisa Avançada com Inteligência Artificial"
      class="mb-10 border-b border-neutral-200 pb-10 text-xl font-medium text-red-600 dark:border-neutral-800 dark:text-red-400"
    >
      Pesquisa Avançada com IA
    </h1>

    <section class="mb-10">
      <h2 class="mb-4 text-lg font-medium">Localize páginas com...</h2>

      <FormRow label="Todas estas palavras:">
        <UInput
          v-model="searchQuery.query"
          class="w-full"
          size="md"
          color="primary"
          variant="outline"
        />
      </FormRow>

      <FormRow label="Esta palavra ou frase exata:">
        <UInput
          v-model="searchQuery.exactPhraseQuery"
          class="w-full"
          size="md"
          color="primary"
          variant="outline"
        />
      </FormRow>

      <FormRow label="Nenhuma destas palavras:">
        <UInput
          v-model="searchQuery.excludeQuery"
          class="w-full"
          size="md"
          color="primary"
          variant="outline"
        />
      </FormRow>

      <FormRow label="Este site ou domínio:">
        <UInput
          v-model="searchQuery.site"
          class="w-full"
          size="md"
          color="primary"
          variant="outline"
        />
      </FormRow>
    </section>

    <section class="mb-10">
      <h2
        class="mb-4 border-t border-neutral-200 pt-10 text-lg font-medium dark:border-neutral-800"
      >
        Em seguida, restrinja seus resultados por...
      </h2>

      <FormRow label="Tipo de arquivo:">
        <USelect
          v-model="searchQuery.fileType"
          :items="FILE_TYPE_OPTIONS"
          value-key="value"
          placeholder="qualquer formato"
          class="w-full"
          size="md"
        />
      </FormRow>

      <FormRow label="Idioma:">
        <USelect
          v-model="searchQuery.language"
          :items="LANGUAGE_OPTIONS"
          value-key="value"
          placeholder="qualquer idioma"
          class="w-full"
          size="md"
        />
      </FormRow>

      <FormRow label="Região:">
        <USelect
          v-model="searchQuery.region"
          :items="REGION_OPTIONS"
          value-key="value"
          placeholder="qualquer região"
          class="w-full"
          size="md"
        />
      </FormRow>

      <div class="grid grid-cols-1 items-center gap-4 py-3 md:grid-cols-6">
        <div class="text-base font-medium md:col-span-2">
          Período de publicação:
        </div>

        <div class="flex flex-col gap-4 text-base md:col-span-4 md:flex-row">
          <label>
            A partir da data:
            <UInput
              v-model="searchQuery.afterDate"
              type="date"
              size="md"
              color="primary"
              variant="outline"
            />
          </label>

          <label>
            Antes da data:
            <UInput
              v-model="searchQuery.beforeDate"
              type="date"
              color="primary"
              variant="outline"
            />
          </label>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2
        class="mb-4 border-t border-neutral-200 pt-10 text-lg font-medium dark:border-neutral-800"
      >
        Adicione filtros adicionais
      </h2>

      <FormRow label="Referência de filtro adicional:">
        <UInput
          v-model="AIExtraSearchFilter.extraFilterReference"
          class="w-full"
          size="md"
          color="primary"
          variant="outline"
        />
      </FormRow>

      <FormRow label="Parâmetros/Operadores adicionais:">
        <UInput
          v-model="AIExtraSearchFilter.extraSearchParamsOrOperators"
          class="w-full"
          size="md"
          color="primary"
          variant="outline"
        />
      </FormRow>
    </section>

    <section class="mb-10">
      <h2
        class="mb-4 border-t border-neutral-200 pt-10 text-lg font-medium dark:border-neutral-800"
      >
        Agora...
      </h2>

      <FormRow label="Escolha um modelo de IA:">
        <USelect
          v-model="AIAssistant.modelChatUrl"
          :items="AI_ASSISTANT_MODELS"
          value-key="value"
          class="w-full"
          size="md"
        />
      </FormRow>

      <FormRow label="E faça uma pergunta:">
        <UTextarea
          v-model="AIAssistant.userPrompt"
          class="w-full"
          size="md"
          color="primary"
          variant="outline"
        />
      </FormRow>
    </section>

    <div class="flex flex-wrap justify-end gap-4 text-base font-medium">
      <UButton
        color="primary"
        size="lg"
        class="px-8 shadow-md"
        @click="copyAiSearchPrompt"
      >
        Copiar prompt
      </UButton>

      <UButton type="submit" color="secondary" size="lg" class="px-8 shadow-md">
        Pesquisa avançada
      </UButton>
    </div>
  </UForm>
</template>
