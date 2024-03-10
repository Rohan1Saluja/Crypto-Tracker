export const formatCurrency = (price: number, currency: string) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: price < 0.009 ? 6 : 2,
  }).format(price);
  return formattedPrice;
};
