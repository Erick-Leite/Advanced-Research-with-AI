import type { LanguageISO639Code, RegionISO3166Code } from "../iso-codes";

export type LanguageCode<
  T extends string =
    LanguageISO639Code | `${LanguageISO639Code}-${RegionISO3166Code}`,
> = T;
