import { buildSearchParams } from "./buildSearchParams";

export const buildSearchFilterField = <
  TSearchQuery extends Record<string, unknown>,
  TParamMap extends Record<keyof TSearchQuery, string>,
>(
  searchQuery: TSearchQuery,
  paramMap: TParamMap,
): string => {
  const searchFilterField = buildSearchParams(searchQuery, paramMap);

  return searchFilterField;
};
