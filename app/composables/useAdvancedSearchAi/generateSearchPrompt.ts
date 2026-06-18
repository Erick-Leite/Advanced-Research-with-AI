import { buildSearchParams } from "./buildSearchParams";
import { buildSearchPrompt } from "./buildSearchPrompt";

export const generateSearchPrompt = <
  TSearchQuery extends Record<string, unknown>,
  TParamMap extends Record<keyof TSearchQuery, string>,
>(
  extraFilterReference: string,
  extraSearchParamsOrOperators: string,
  searchQuery: TSearchQuery,
  paramMap: TParamMap,
  userPrompt: string,
): string => {
  const searchParams = buildSearchParams(searchQuery, paramMap);

  const searchPrompt = buildSearchPrompt(
    extraFilterReference,
    searchParams,
    extraSearchParamsOrOperators,
    userPrompt,
  );

  return searchPrompt;
};
