import type { RegionCode, SelectOption } from "~/types/search-options";
import type { RegionDefinitionCodes } from "./REGION_DEFINITIONS";

import { DEFAULT_REGION_OPTION } from "./DEFAULT_REGION_OPTION";
import { REGION_DEFINITIONS } from "./REGION_DEFINITIONS";

import { compareStringsPtBR } from "~/utils/compareStringsPtBR";

const createRegionOption = (
  label: string,
  code: RegionCode<RegionDefinitionCodes>,
): SelectOption<typeof code> => ({
  label,
  value: code,
});

const regionOptions: SelectOption[] = REGION_DEFINITIONS.map(([label, code]) =>
  createRegionOption(label, code),
).toSorted((a, b) => compareStringsPtBR(a.label, b.label));

export const REGION_OPTIONS: SelectOption[] = [
  DEFAULT_REGION_OPTION,
  ...regionOptions,
] as const;
