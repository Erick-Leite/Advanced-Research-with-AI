const userLanguage = import.meta.client ? navigator.language : "pt-BR";

const userLanguageIsPtBr = userLanguage === "pt-BR";

export const buildSearchPrompt = (
  extraFilterReference: string,
  searchParams: string,
  extraSearchParamsOrOperators: string,
  userPrompt: string,
): string =>
  [
    `
https://advanced-research-ai.vercel.app/ai-search-filter

https://advanced-research-ai.vercel.app/persona`,
    extraFilterReference && `AI Extra Search Filter: ${extraFilterReference}`,
    (extraSearchParamsOrOperators || searchParams) &&
      // Os parâmetros/operadores de busca extra devem vir no início do campo `AI Search Filter` para evitar conflitos com os parâmetros de busca principais
      `AI Search Filter: ${[extraSearchParamsOrOperators, searchParams].join(" ")}`,
    userPrompt &&
      userLanguageIsPtBr &&
      `Adote a persona antes de responder ao prompt do usuário abaixo:
${userPrompt}`,
    userPrompt &&
      !userLanguageIsPtBr &&
      `Adopt the persona before responding to the user's prompt below:
${userPrompt}`,
  ]
    .filter(Boolean)
    .join("\n\n")
    .trim();
