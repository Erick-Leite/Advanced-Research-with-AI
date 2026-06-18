import type { SelectOption } from "~/types/search-options";
import type { FileTypeDefinitionCodes } from "./FILE_TYPE_DEFINITIONS";

import { DEFAULT_FILE_TYPE } from "./DEFAULT_FILE_TYPE";
import { FILE_TYPE_DEFINITIONS } from "./FILE_TYPE_DEFINITIONS";

const createFileTypeOption = (
  label: string,
  code: FileTypeDefinitionCodes,
): SelectOption<FileTypeDefinitionCodes> => ({
  label: `${label} (.${code})`,
  value: code,
});

const fileTypeOptions: SelectOption[] = FILE_TYPE_DEFINITIONS.map(
  ([label, code]) => createFileTypeOption(label, code),
);

export const FILE_TYPE_OPTIONS: SelectOption[] = [
  DEFAULT_FILE_TYPE,
  ...fileTypeOptions,
] as const;
