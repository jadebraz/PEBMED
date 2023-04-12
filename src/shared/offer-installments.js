export const calculateInstallmentsValue = (offerInstallments, offerFullPrice) => {
    return `${offerInstallments}x de ${(
        offerFullPrice / offerInstallments
      ).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}/mês`
}