import type { SearchQueryOptions } from "~/types/search-options";

export const SEARCH_PARAM_MAP: Record<keyof SearchQueryOptions, string> = {
  query: "q",
  exactPhraseQuery: "epq",
  excludeQuery: "eq",
  site: "s",
  fileType: "ft",
  language: "l",
  region: "r",
  afterDate: "ad",
  beforeDate: "bd",
} as const;
