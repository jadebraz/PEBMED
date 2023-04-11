export const inputMaskCardNumber = (value) => {
    value = value.replace(/(\d{4})(\d)/,"$1 $2");

    value = value.replace(/(\d{4})(\d)/,"$1 $2");

    return value;
}