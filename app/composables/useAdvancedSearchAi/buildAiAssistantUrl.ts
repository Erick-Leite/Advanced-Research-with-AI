export const buildAIAssistantUrl = (
  modelChatUrl: string,
  searchPrompt: string,
): string => modelChatUrl + encodeURIComponent(searchPrompt);
