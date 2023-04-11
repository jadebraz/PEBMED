import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";

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
import { isValidFormValues } from "../../validation/isValidFormValues";

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
  LineInput,
  ContainerFlex,
  Installments,
  Plan,
  Premium,
  ContainerEmailCheckout,
  NameEmailCheckout,
  ContainerCardOfferr,
  LineOffer,
  ContainerText,
  ContainerDiscountPercentage,
  DiscountPercentage,
  ContantInput,
  ContainerAbout,
  EmailCheckout,
  OfferTitle,
  OfferFullPrice,
  OfferInstallments,
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

  const [offers, setOffers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
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
    } else if (name === "cardNumber") {
      fieldValue = inputMaskCardNumber(value);
    } else if (name === "expirationDate") {
      fieldValue = inputMaskExpirationDate(value);
    } else if (name === "cvv") {
      fieldValue = inputMaskNumber(value);
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
              autoComplete="off"
              onChange={handleOnChangeFields}
            />

            <ContainerFlex>
              <Input
                label="Validade"
                type="text"
                placeholder="MM/AA"
                maxLength="7"
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
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <LineInput></LineInput>
              </Installments>
            )}
            <Button/>
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
                <LineOffer isSelected={offer.id === offerSelected?.id}>
                  <ContainerText>
                    <OfferTitle>{`${offer.title} | ${offer.description}`}</OfferTitle>
                    <OfferFullPrice>{`De ${offer.fullPrice.toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )} | Por ${(
                      offer.fullPrice - offer.discountAmmount
                    ).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}`}</OfferFullPrice>
                    <ContainerDiscountPercentage>
                      <DiscountPercentage>
                        {" "}
                        -{offer.discountPercentage * 100}%
                      </DiscountPercentage>
                    </ContainerDiscountPercentage>
                    <OfferInstallments>{`${offer.installments.toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )}x de ${(
                      offer.fullPrice / offer.installments
                    ).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}/mês`}</OfferInstallments>
                  </ContainerText>
                  <ContantInput className="containerInput"></ContantInput>
                </LineOffer>
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
