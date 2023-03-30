export const inputmaskexpirationdate = (value) => {
    return value.replace(/(\d{2})(\d{4})/,"$1/$2");
}