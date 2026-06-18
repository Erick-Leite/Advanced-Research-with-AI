import type { SearchQueryOptions } from "~/types/search-options";

export const searchQuery = reactive<SearchQueryOptions>({
  query: "",
  exactPhraseQuery: "",
  excludeQuery: "",
  site: "",
  fileType: undefined,
  language: undefined,
  region: undefined,
  afterDate: "",
  beforeDate: "",
});
