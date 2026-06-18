import type { SelectOption } from "~/types/search-options";

export const AI_ASSISTANT_MODELS: SelectOption[] = [
  {
    label: "ChatGPT",
    value: "https://chatgpt.com/?prompt=",
  },
  {
    label: "Claude",
    value: "https://claude.ai/new?q=",
  },
  {
    label: "Grok",
    value: "https://grok.com/?q=",
  },
] as const;
