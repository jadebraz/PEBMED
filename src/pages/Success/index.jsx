import Star from "../../assets/img/star.png";
import True from "../../assets/img/true.png";

import { useLocation } from "react-router-dom";

import { SubmitButton } from "../../components/Button/styles";

import { calculateInstallmentsSuccessValue } from "../../shared/offer-installments-success";

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
} from "./styles";

function Success() {
  const location = useLocation();

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
              {calculateInstallmentsSuccessValue(
                location.state.offerSelected.fullPrice,
                location.state.installments
              )}
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

        <SubmitButton type="submit">IR PARA HOME</SubmitButton>
      </Center>
    </ContainerFooter>
  );
}

export default Success;
