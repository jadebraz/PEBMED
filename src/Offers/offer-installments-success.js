export const calculateInstallmentsSuccessValue = (locationStateOfferSelectedFullPrice, locationStateInstallments) => {
    return  `${locationStateOfferSelectedFullPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        })} | ${locationStateInstallments}x de ${(
            locationStateOfferSelectedFullPrice /
            locationStateInstallments
        ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    `;
}