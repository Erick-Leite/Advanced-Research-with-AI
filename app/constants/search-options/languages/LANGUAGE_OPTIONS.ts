import type { LanguageCode, SelectOption } from "~/types/search-options";
import type { LanguageDefinitionCodes } from "./LANGUAGE_DEFINITIONS";

import { DEFAULT_LANGUAGE_OPTION } from "./DEFAULT_LANGUAGE_OPTION";
import { LANGUAGE_DEFINITIONS } from "./LANGUAGE_DEFINITIONS";

import { compareStringsPtBR } from "~/utils/compareStringsPtBR";

const createLanguageOption = (
  label: string,
  code: LanguageCode<LanguageDefinitionCodes>,
): SelectOption<typeof code> => ({
  label,
  value: code,
});

const languageOptions: SelectOption[] = LANGUAGE_DEFINITIONS.map(
  ([label, code]) => createLanguageOption(label, code),
).toSorted((a, b) => compareStringsPtBR(a.label, b.label));

export const LANGUAGE_OPTIONS: SelectOption[] = [
  DEFAULT_LANGUAGE_OPTION,
  ...languageOptions,
] as const;
