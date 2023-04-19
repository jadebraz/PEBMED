import { inputMaskNumber } from "./input-mask-number";



export const isValidFormValues = (values) => {
  const cpf = values?.cpf;
  const expirationDate = values?.expirationDate;

  if (!isValidCpf(cpf)) {
    throw new Error("CPF inválido");
  }

  if (!isValidExpirationDate(expirationDate)) {
    throw new Error("Data de expiração inválida ou no passado.");
  }

  return true;
};

export const isValidCpf = (cpf) => {
  let Soma;
  let Resto;
  Soma = 0;

  cpf = inputMaskNumber(cpf);

  if (cpf == "00000000000") return false;

  for (let i = 1; i <= 9; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(9, 10))) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
};

export const isValidCardNumber = (cardNumber) => {
  return cardNumber.length === 19;
};

export const isValidCvv = (cvv) => {
  return cvv.length === 3;
};

export const isValidExpirationDate = (expirationDate) => {
  const month = expirationDate.split("/")[0];
  const year = expirationDate.split("/")[1];

  if (month < 1 || month > 12) {
    return false;
  }

  const expirationDateConverted = new Date(year, month - 1);

  const currentDate = new Date();

  return expirationDateConverted > currentDate;
};
