export const calculateDiscountValue = (offerFullPrice, offerDiscountAmmount) => {
    return `De ${offerFullPrice.toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      )} | Por ${(
        offerFullPrice - offerDiscountAmmount
      ).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`
}