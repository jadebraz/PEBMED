import React, { useEffect, useState } from "react";
import "../../App.css";
import "./checkout.css";
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

function Checkout() {
  const navigate = useNavigate();

  const [offers, setOffers] = useState();
  const [values, setValues] = useState({installments: 1});
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

    setValues({ ...values, [name]: fieldvalue});
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
    setValues({...values, offerSelected});
  }, [offerSelected]);

  return (
    <main>
      <section id="home">
        <div className="container">
          <div className="left">
            <div className="title">
              <h1>Estamos quase lá!</h1>
              <h2>Insira seus dados de pagamento abaixo:</h2>
            </div>

            <div className="card">
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

              <div className="iugu">
                <h1>Pagamentos por</h1>
                <img src={Iugu} />
              </div>
            </div>

            <div className="label">
              <form onSubmit={handleSubmitForm}>
                <div className="row">
                  <div className="col">
                    <div className="inputBox">
                      <span>Número do cartão</span>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={values?.nCartao || ""}
                        maxLength="19"
                        required
                        name="nCartao"
                        autoComplete="off"
                        onChange={onChange}
                      ></input>
                      <h1></h1>
                    </div>

                    <div className="flex">
                      <div className="inputBox">
                        <span>Validade</span>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          maxLength="7"
                          value={values?.expirationDate || ""}
                          name="expirationDate"
                          autoComplete="off"
                          required
                          onChange={onChange}
                        ></input>
                        <h1></h1>
                      </div>

                      <div className="inputBox">
                        <span>CVV</span>
                        <input
                          type="text"
                          placeholder="000"
                          maxLength="3"
                          name="cvv"
                          autoComplete="off"
                          value={values?.cvv || ""}
                          required
                          onChange={onChange}
                        ></input>
                        <h1></h1>
                      </div>
                    </div>

                    <div className="inputBox">
                      <span>Nome impresso no cartão</span>
                      <input
                        type="text"
                        placeholder="Seu nome"
                        maxLength="25"
                        name="nome"
                        required
                        value={values?.nome || ""}
                        autoComplete="off"
                        onChange={onChange}
                      ></input>
                      <h1></h1>
                    </div>

                    <div className="inputBox">
                      <span>CPF</span>
                      <input
                        type="text"
                        placeholder="000.000.000-00"
                        value={values?.cpf || ""}
                        maxLength="14"
                        name="cpf"
                        autoComplete="off"
                        required
                        onChange={onChange}
                      ></input>
                      <h1></h1>
                    </div>

                    <div className="inputBox">
                      <span>Cupom</span>
                      <input
                        type="text"
                        placeholder="Insira  aqui"
                        maxLength="10"
                        name="cupom"
                        autoComplete="off"
                        onChange={onChange}
                      ></input>
                      <h1></h1>
                    </div>

                    {offerSelected?.splittable && (
                      <div className="inputBox2">
                        <span>Número de parcelas</span>

                        <select name="cars" id="cars" onChange={(event => setValues({...values, installments: event.target.value}))}>
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

                        <h1></h1>
                      </div>
                    )}
                  </div>
                </div>

                <input
                  type="submit"
                  value="Finalizar pagamento"
                  className="submit-btn"
                ></input>
              </form>
            </div>
          </div>

          <div className="right">
            <div className="right2">
              <div className="email">
                <span>Confira o seu plano:</span>
                <h2></h2>
                <h3>fulano@cicrano.com.br</h3>
              </div>

              <div className="card">
                {offers?.map((offer) => (
                  <div key={offer.id}>
                    <div className="line1">
                      <div className="containerText">
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
                        <div className="containerDiscountPercentage">
                          <h3 className="discountPercentage">
                            {" "}
                            -{offer.discountPercentage * 100}%
                          </h3>
                        </div>
                        <h4>{`${offer.installments.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}x de ${(
                          offer.fullPrice / offer.installments
                        ).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}/mês`}</h4>
                      </div>
                      <div
                        className="containerInput"
                        onClick={() => setOfferSelected(offer)}
                      >
                        <input name="plan" type="radio" />
                      </div>
                    </div>
                    <br />
                  </div>
                ))}

                <div className="about">
                  <h1></h1>
                  <p>Sobre a cobrança</p>
                  <img src={Interrogation} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
