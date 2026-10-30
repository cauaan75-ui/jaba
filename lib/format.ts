const brlFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** Formats a number as Brazilian currency, e.g. 105 -> "R$ 105,00". */
export function formatCurrency(value: number): string {
  return brlFormatter.format(value);
}
