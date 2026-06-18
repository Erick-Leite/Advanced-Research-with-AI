import type { AIAssistantOptions } from "~/types/search-options";
import { AI_ASSISTANT_MODELS } from "~/constants/search-options";

export const AIAssistant = reactive<AIAssistantOptions>({
  modelChatUrl: AI_ASSISTANT_MODELS[0]?.value ?? "",
  userPrompt: "",
});
