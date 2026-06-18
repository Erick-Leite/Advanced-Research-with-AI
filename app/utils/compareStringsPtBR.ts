const collator = new Intl.Collator("pt-BR", {
  sensitivity: "base",
  numeric: true,
});

/**
 * Compara duas strings usando regras de localidade (pt-BR)
 * @param a Primeira string
 * @param b Segunda string
 * @returns -1 se a < b, 1 se a > b, ou 0 se iguais
 */

export const compareStringsPtBR = (a: string, b: string): number => {
  return collator.compare(a, b);
};
