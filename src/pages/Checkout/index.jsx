import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";

import { calculateInstallmentsValue } from "../../shared/offer-installments";

import Mastercard from "../../assets/img/mastercard.png";
import Cinza from "../../assets/img/cinza.png";
import American from "../../assets/img/american.png";
import Logo from "../../assets/img/elo.png";
import Visa from "../../assets/img/visa.png";
import Iugu from "../../assets/img/iugu.png";
import Interrogation from "../../assets/img/interrogation.png";

import { inputCpfMask } from "../../validation/input-mask-cpf";
import { inputMaskCardNumber } from "../../validation/input-mask-card-number";
import { inputMaskExpirationDate } from "../../validation/input-mask-expiration-date";
import { inputMaskNumber } from "../../validation/input-mask-number";
import { isValidFormValues, isValidCpf, isValidCardNumber, isValidExpirationDate, isValidCvv, isValidholderName } from "../../validation/isValidFormValues";

import { SubscriptionServices } from "../../services/SubscriptionServices";
import { OfferServices } from "../../services/OfferServices";

import {
  ContainerMain,
  ContainerForm,
  Title,
  Subtitle,
  ContainerCards,
  ContainerIugu,
  TitleIugu,
  ContainerUser,
  Form,
  Name,
  ContainerFlex,
  Installments,
  Plan,
  Premium,
  ContainerEmailCheckout,
  NameEmailCheckout,
  ContainerCardOfferr,
  ContainerAbout,
  EmailCheckout,
} from "./styles";

function Checkout() {
  const navigate = useNavigate();

  const initialFormValues = {
    holderName: "",
    installments: 1,
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cpf: "",
    cupom: "",
  };

  const initialIsValidFieldsValues = {
    holderName: true,
    installments: true,
    cardNumber: true,
    expirationDate: true,
    cvv: true,
    cpf: true,
    cupom: true,
  };

  const [offers, setOffers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [isValidFieldsValues, setIsValidFieldsValues] = useState(initialIsValidFieldsValues);
  const [offerSelected, setOfferSelected] = useState();

  useEffect(() => {
    const offerServices = new OfferServices();
    offerServices
      .getOffers()
      .then((response) => {
        setOffers(response.data);
        setOfferSelected(response.data[0]);
      })
      .catch((error) => {
        alert("Erro na busca dos planos.");
      });
  }, []);

  useEffect(() => {
    setFormValues({ ...formValues, offerSelected });
  }, [offerSelected]);

  const handleOnChangeFields = (event) => {
    const { value, name } = event.target;

    let fieldValue = value;

    if (name === "cpf") {
      fieldValue = inputCpfMask(value);
      setIsValidFieldsValues({
        ...isValidFieldsValues,
        cpf: isValidCpf(fieldValue)
      });
    } else if (name === "cardNumber") {
      fieldValue = inputMaskCardNumber(value);
      setIsValidFieldsValues({
        ...isValidFieldsValues,
        cardNumber: isValidCardNumber(fieldValue)
      });
    } else if (name === "expirationDate") {
      fieldValue = inputMaskExpirationDate(value);
      setIsValidFieldsValues({
        ...isValidFieldsValues,
        expirationDate: isValidExpirationDate(fieldValue)
      });
    } else if (name === "cvv") {
      fieldValue = inputMaskNumber(value);
      setIsValidFieldsValues({
        ...isValidFieldsValues,
        cvv: isValidCvv(fieldValue)
      });
    } else if (name === "holderName") {
      setIsValidFieldsValues({
        ...isValidFieldsValues,
        holderName : isValidholderName(fieldValue)
      });
    }

    setFormValues({ ...formValues, [name]: fieldValue });
  };

  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();

      isValidFormValues(formValues);

      const subscriptionServices = new SubscriptionServices();
      await subscriptionServices.createSubscription(formValues);

      navigate("/success", { state: formValues });
    } catch (error) {
      if (error) {
        alert(error);
      } else {
        alert("Erro na realização da assinatura.");
      }
    }
  };

  return (
    <ContainerMain>
      <ContainerForm>
        <Title>Estamos quase lá!</Title>
        <Subtitle>Insira seus dados de pagamento abaixo:</Subtitle>

        <ContainerCards>
          <div className="box1">
            <img src={Mastercard} />
          </div>

          <div className="box2">
            <img src={Cinza} />
          </div>

          <div className="box3">
            <img src={American} />
          </div>

          <div className="box4">
            <img src={Visa} />
          </div>

          <div className="box5">
            <img src={Logo} />
          </div>

          <ContainerIugu>
            <TitleIugu>Pagamentos por</TitleIugu>
            <img src={Iugu} />
          </ContainerIugu>
        </ContainerCards>

        <ContainerUser>
          <Form onSubmit={handleSubmitForm}>
            <Input
              label="Número do Cartão"
              type="text"
              placeholder="0000 0000 0000 0000"
              value={formValues?.cardNumber || ""}
              maxLength="19"
              required
              name="cardNumber"
              error={!isValidFieldsValues.cardNumber}
              autoComplete="off"
              onChange={handleOnChangeFields}
            />

            <ContainerFlex>
              <Input
                label="Validade"
                type="text"
                placeholder="MM/AAAA"
                maxLength="7"
                error={!isValidFieldsValues.expirationDate}
                value={formValues?.expirationDate || ""}
                name="expirationDate"
                autoComplete="off"
                required
                onChange={handleOnChangeFields}
              />

              <Input
                label="CVV"
                type="text"
                placeholder="000"
                maxLength="3"
                name="cvv"
                error={!isValidFieldsValues.cvv}
                autoComplete="off"
                value={formValues?.cvv || ""}
                required
                onChange={handleOnChangeFields}
              />
            </ContainerFlex>

            <Input
              label="Nome impresso no cartão"
              type="text"
              placeholder="Seu nome"
              maxLength="25"
              name="holderName"
              required
              error={!isValidFieldsValues.holderName}
              autoComplete="off"
              onChange={handleOnChangeFields}
            />

            <Input
              label="CPF"
              type="text"
              placeholder="000.000.000-00"
              value={formValues?.cpf || ""}
              maxLength="14"
              name="cpf"
              autoComplete="off"
              required
              error={!isValidFieldsValues.cpf}
              onChange={handleOnChangeFields}
            />

            <Input
              label="Cupom"
              type="text"
              placeholder="Insira  aqui"
              maxLength="10"
              name="cupom"
              autoComplete="off"
              onChange={handleOnChangeFields}
            />

            {offerSelected?.splittable && (
              <Installments>
                <Name>Número de parcelas</Name>
                <select
                  name="numberInstallments"
                  id="numberInstallments"
                  onChange={(event) =>
                    setFormValues({
                      ...formValues,
                      installments: event.target.value,
                    })
                  }
                >
                  <option value="2">
                    {calculateInstallmentsValue(2, offerSelected.fullPrice)}
                  </option>
                  <option value="3">
                    {calculateInstallmentsValue(3, offerSelected.fullPrice)}
                  </option>
                  <option value="4">
                    {calculateInstallmentsValue(4, offerSelected.fullPrice)}
                  </option>
                  <option value="5">
                    {calculateInstallmentsValue(5, offerSelected.fullPrice)}
                  </option>
                  <option value="6">
                    {calculateInstallmentsValue(6, offerSelected.fullPrice)}
                  </option>
                  <option value="7">
                    {calculateInstallmentsValue(7, offerSelected.fullPrice)}
                  </option>
                  <option value="8">
                    {calculateInstallmentsValue(8, offerSelected.fullPrice)}
                  </option>
                  <option value="9">
                    {calculateInstallmentsValue(9, offerSelected.fullPrice)}
                  </option>
                  <option value="10">
                    {calculateInstallmentsValue(10, offerSelected.fullPrice)}
                  </option>
                  <option value="11">
                    {calculateInstallmentsValue(11, offerSelected.fullPrice)}
                  </option>
                  <option value="12">
                    {calculateInstallmentsValue(12, offerSelected.fullPrice)}
                  </option>
                </select>
              </Installments>
            )}
            <Button label="Finalizar pagamento" />
          </Form>
        </ContainerUser>
      </ContainerForm>

      <Plan>
        <Premium>
          <ContainerEmailCheckout>
            <NameEmailCheckout>Confira o seu plano:</NameEmailCheckout>
            <EmailCheckout>fulano@cicrano.com.br</EmailCheckout>
          </ContainerEmailCheckout>

          <ContainerCardOfferr>
            {offers?.map((offer) => (
              <div key={offer.id} onClick={() => setOfferSelected(offer)}>
                <Card offer={offer} offerSelected={offerSelected} />
                <br />
              </div>
            ))}

            <ContainerAbout>
              <p>Sobre a cobrança</p>
              <img src={Interrogation} />
            </ContainerAbout>
          </ContainerCardOfferr>
        </Premium>
      </Plan>
    </ContainerMain>
  );
}

export default Checkout;
