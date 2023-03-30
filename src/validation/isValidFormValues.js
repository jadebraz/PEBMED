import { inputmasknumber } from "./input-mask-number";

export const isValidFormValues = (values) => {
    const cpf = values?.cpf;
    const expirationDate = values?.expirationDate;

    if (!isValidCpf(cpf)) {
        throw new Error('CPF inválido');
    }

    if(!isValidExpirationDate(expirationDate)) {
        throw new Error('Cartão expirado');
    }
}

const isValidCpf = (cpf) => {
    var Soma;
    var Resto;
    Soma = 0;

    cpf = inputmasknumber(cpf);

    if (cpf == "00000000000") return false;

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
}

const isValidExpirationDate = (expirationDate) => {
    const month = expirationDate.split('/')[0];
    const year = expirationDate.split('/')[1];

    console.log(month);
    console.log(year);

    const expirationDateConverted = new Date(year, month - 1);

    console.log(expirationDateConverted);

    const currentDate = new Date();

    return expirationDateConverted > currentDate;
}