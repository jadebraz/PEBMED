import "../../App.css";
import React, { useEffect, useState } from "react";
import { isValidFormValues } from "../../validation/isValidFormValues";
import { useNavigate } from "react-router-dom";
import Mastercard from "../../assets/img/mastercard.png";
import Cinza from "../../assets/img/cinza.png";
import American from "../../assets/img/american.png";
import Logo from "../../assets/img/elo.png";
import Visa from "../../assets/img/visa.png";
import Iugu from "../../assets/img/iugu.png";
import Interrogation from "../../assets/img/interrogation.png";
import { inputcpfmask } from "../../validation/input-mask-cpf";
import { inputmaskcardnumber } from "../../validation/input-mask-card-number";
import { inputmaskexpirationdate } from "../../validation/input-mask-expiration-date";
import { inputmasknumber } from "../../validation/input-mask-number";
import { SubscriptionServices } from "../../services/SubscriptionServices";
import { OfferServices } from "../../services/OfferServices";
import {
  ContainerMain,
  ContainerForm,
  Title,
  Subtitle,
  ContainerCard,
  ContainerIugu,
  TitleIugu,
  ContainerUser,
  Form,
  ContainerInput,
  Name,
  Input,
  LineInput,
  ContainerFlex,
  Installments,
  SubmitBtn,
  Plan,
  Premium,
  Emaill,
  CardOfferr,
  Line,
  ContainerText,
  ContainerDiscountPercentage,
  DiscountPercentage,
  ContantInput,
  About,
} from "./styles";

function Checkout() {
  const navigate = useNavigate();

  const [offers, setOffers] = useState();
  const [values, setValues] = useState({ installments: 1 });
  const [offerSelected, setOfferSelected] = useState();

  const onChange = (event) => {
    const { value, name } = event.target;

    let fieldvalue = value;

    if (name === "cpf") {
      fieldvalue = inputcpfmask(value);
    } else if (name === "nCartao") {
      fieldvalue = inputmaskcardnumber(value);
    } else if (name === "expirationDate") {
      fieldvalue = inputmaskexpirationdate(value);
    } else if (name === "cvv") {
      fieldvalue = inputmasknumber(value);
    }

    setValues({ ...values, [name]: fieldvalue });
  };

  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();

      isValidFormValues(values);

      const subscriptionServices = new SubscriptionServices();
      await subscriptionServices.createSubscription(values);

      navigate("/success", { state: values });
    } catch (error) {
      if (error) {
        alert(error);
      }
      alert("Erro na realização da assinatura.");
    }
  };

  useEffect(() => {
    const offerServices = new OfferServices();
    offerServices
      .getOffer()
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        alert("Erro na busca dos planos.");
      });
  }, []);

  useEffect(() => {
    setValues({ ...values, offerSelected });
  }, [offerSelected]);

  return (
    <ContainerMain>
      <ContainerForm>
        <Title>Estamos quase lá!</Title>
        <Subtitle>Insira seus dados de pagamento abaixo:</Subtitle>

        <ContainerCard>
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
        </ContainerCard>

        <ContainerUser>
          <Form onSubmit={handleSubmitForm}>
            <ContainerInput>
              <Name>Número do cartão</Name>
              <Input
                type="text"
                placeholder="0000 0000 0000 0000"
                value={values?.nCartao || ""}
                maxLength="19"
                required
                name="nCartao"
                autoComplete="off"
                onChange={onChange}
              ></Input>
              <LineInput></LineInput>
            </ContainerInput>

            <ContainerFlex>
              <ContainerInput>
                <Name>Validade</Name>
                <Input
                  type="text"
                  placeholder="MM/AA"
                  maxLength="7"
                  value={values?.expirationDate || ""}
                  name="expirationDate"
                  autoComplete="off"
                  required
                  onChange={onChange}
                ></Input>
                <LineInput></LineInput>
              </ContainerInput>

              <ContainerInput>
                <Name>CVV</Name>
                <Input
                  type="text"
                  placeholder="000"
                  maxLength="3"
                  name="cvv"
                  autoComplete="off"
                  value={values?.cvv || ""}
                  required
                  onChange={onChange}
                ></Input>
                <LineInput></LineInput>
              </ContainerInput>
            </ContainerFlex>

            <ContainerInput>
              <Name>Nome impresso no cartão</Name>
              <Input
                type="text"
                placeholder="Seu nome"
                maxLength="25"
                name="nome"
                required
                autoComplete="off"
                onChange={onChange}
              ></Input>
              <LineInput></LineInput>
            </ContainerInput>

            <ContainerInput>
              <Name>CPF</Name>
              <Input
                type="text"
                placeholder="000.000.000-00"
                value={values?.cpf || ""}
                maxLength="14"
                name="cpf"
                autoComplete="off"
                required
                onChange={onChange}
              ></Input>
              <LineInput></LineInput>
            </ContainerInput>

            <ContainerInput>
              <Name>Cupom</Name>
              <Input
                type="text"
                placeholder="Insira  aqui"
                maxLength="10"
                name="cupom"
                autoComplete="off"
                onChange={onChange}
              ></Input>
              <LineInput></LineInput>
            </ContainerInput>

            {offerSelected?.splittable && (
              <Installments>
                <Name>Número de parcelas</Name>
                <select
                  name="cars"
                  id="cars"
                  onChange={(event) =>
                    setValues({ ...values, installments: event.target.value })
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

            <SubmitBtn type="submit">Finalizar pagamento</SubmitBtn>
          </Form>
        </ContainerUser>
      </ContainerForm>

      <Plan>
        <Premium>
          <Emaill>
            <span>Confira o seu plano:</span>
            <h2></h2>
            <h3>fulano@cicrano.com.br</h3>
          </Emaill>

          <CardOfferr>
            {offers?.map((offer) => (
              <div key={offer.id}>
                <Line>
                  <ContainerText>
                    <h1>{`${offer.title} | ${offer.description}`}</h1>
                    <p>{`De ${offer.fullPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })} | Por ${(
                      offer.fullPrice - offer.discountAmmount
                    ).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}`}</p>
                    <ContainerDiscountPercentage>
                      <DiscountPercentage>
                        {" "}
                        -{offer.discountPercentage * 100}%
                      </DiscountPercentage>
                    </ContainerDiscountPercentage>
                    <h4>{`${offer.installments.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}x de ${(
                      offer.fullPrice / offer.installments
                    ).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}/mês`}</h4>
                  </ContainerText>
                  <ContantInput
                    className="containerInput"
                    onClick={() => setOfferSelected(offer)}
                  >
                    <input name="plan" type="radio" />
                  </ContantInput>
                </Line>
                <br />
              </div>
            ))}

            <About>
              <h1></h1>
              <p>Sobre a cobrança</p>
              <img src={Interrogation} />
            </About>
          </CardOfferr>
        </Premium>
      </Plan>
    </ContainerMain>
  );
}

export default Checkout;
