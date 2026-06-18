import type {
  AIAssistantOptions,
  AIExtraSearchFilterOptions,
} from "~/types/search-options";
import { buildSearchFilterField } from "./buildSearchFilterField";
import { buildSearchPrompt } from "./buildSearchPrompt";
import { buildAIAssistantUrl } from "./buildAiAssistantUrl";

export const searchAI = <
  TSearchQuery extends Record<string, unknown>,
  TParamMap extends Record<keyof TSearchQuery, string>,
>(
  searchQuery: TSearchQuery,
  paramMap: TParamMap,
  aiExtraSearchFilterOptions: AIExtraSearchFilterOptions,
  aiAssistantOptions: AIAssistantOptions,
): { copyAiSearchPrompt: () => void; executeSearchAi: () => void } => {
  const buildCurrentSearchPrompt = () => {
    const searchFilterField = buildSearchFilterField(searchQuery, paramMap);
    return buildSearchPrompt(
      aiExtraSearchFilterOptions.extraFilterReference,
      searchFilterField,
      aiExtraSearchFilterOptions.extraSearchParamsOrOperators,
      aiAssistantOptions.userPrompt,
    );
  };

  const copyAiSearchPrompt = () =>
    navigator.clipboard.writeText(buildCurrentSearchPrompt());

  const executeSearchAi = () => {
    const aiAssistantUrl = buildAIAssistantUrl(
      aiAssistantOptions.modelChatUrl,
      buildCurrentSearchPrompt(),
    );
    window.open(aiAssistantUrl, "_blank");
  };

  return { copyAiSearchPrompt, executeSearchAi };
};
