import type { AIExtraSearchFilterOptions } from "~/types/search-options/options";

export const AIExtraSearchFilter = reactive<AIExtraSearchFilterOptions>({
  extraFilterReference: "",
  extraSearchParamsOrOperators: "",
});
