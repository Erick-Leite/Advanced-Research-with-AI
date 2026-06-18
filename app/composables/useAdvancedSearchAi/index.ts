import { searchQuery } from "./searchQuery";
import { searchAI } from "./searchAI";
import { AIExtraSearchFilter } from "./AIExtraSearchFilterOptions";
import { AIAssistant } from "./AIAssistant";

import { SEARCH_PARAM_MAP } from "~/constants/SEARCH_PARAM_MAP";

export const useAdvancedSearchAi = () => {
  const { copyAiSearchPrompt, executeSearchAi } = searchAI(
    searchQuery,
    SEARCH_PARAM_MAP,
    AIExtraSearchFilter,
    AIAssistant,
  );

  return {
    searchQuery,
    AIExtraSearchFilter,
    AIAssistant,
    copyAiSearchPrompt,
    executeSearchAi,
  };
};
