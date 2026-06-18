import type { RegionISO3166Code } from "../iso-codes";

export type RegionCode<T extends string = RegionISO3166Code> = T;
