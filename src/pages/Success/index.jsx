import "../../App.css";
import React, { useEffect } from "react";
import Star from "../../assets/img/star.png";
import True from "../../assets/img/true.png";
import { useLocation } from "react-router-dom";
import {
  ContainerFooter,
  Center,
  ContainerEllipse,
  Ellipse,
  ContainerText,
  TitleText,
  SubtitleText,
  ContainerCard,
  ContainerOffer,
  TitleOffer,
  InstallmentsOffer,
  ContainerStar,
  ImgStart,
  ContainerEmail,
  NameEmail,
  Email,
  ContainerCpf,
  NameCpf,
  Cpf,
  ContainerSubscription,
  Subscription,
  InputHome,
} from "./styles";
import { Installments } from "../Checkout/styles";

function Success() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <ContainerFooter>
      <Center>
        <ContainerEllipse>
          <Ellipse>
            <img src={True} />
          </Ellipse>
        </ContainerEllipse>

        <ContainerText>
          <TitleText>Parabéns!</TitleText>
          <SubtitleText>Sua assinatura foi realizada com sucesso</SubtitleText>
        </ContainerText>

        <ContainerCard>
          <ContainerOffer>
            <TitleOffer>{location.state.offerSelected.title}</TitleOffer>
            <InstallmentsOffer>
              {" "}
              {location.state.offerSelected.fullPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}{" "}
              | {location.state.installments}x de{" "}
              {(
                location.state.offerSelected.fullPrice /
                location.state.installments
              ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </InstallmentsOffer>
            <ContainerStar>
              <ImgStart src={Star} />
            </ContainerStar>
          </ContainerOffer>

          <ContainerEmail>
            <NameEmail>E-mail</NameEmail>
            <Email>fulano@cicrano.com.br</Email>
          </ContainerEmail>

          <ContainerCpf>
            <NameCpf>CPF</NameCpf>
            <Cpf>{location.state.cpf}</Cpf>
          </ContainerCpf>
        </ContainerCard>

        <ContainerSubscription>
          <Subscription>Gerenciar assinatura</Subscription>
        </ContainerSubscription>

        <InputHome type="submit">IR PARA HOME</InputHome>
      </Center>
    </ContainerFooter>
  );
}

export default Success;
