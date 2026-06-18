export const buildSearchParams = <
  TSource extends Record<string, unknown>,
  TParamMap extends Record<keyof TSource, string>,
>(
  source: TSource,
  paramMap: TParamMap,
): string => {
  const parts: string[] = [];

  for (const key in paramMap) {
    const rawValue = source[key];

    if (typeof rawValue !== "string") continue;

    const value = rawValue.trim();

    if (!value) continue;

    const paramName = paramMap[key];

    parts.push(`${paramName}=${value}`);
  }

  return parts.join(" ");
};
