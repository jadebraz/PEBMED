export const calculateInstallmentsValue = (offerInstallments, offerFullPrice) => {
    return `${offerInstallments.toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      )}x de ${(
        offerFullPrice / offerInstallments
      ).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}/mês`
}