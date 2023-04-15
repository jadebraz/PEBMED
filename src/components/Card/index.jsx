import React from 'react';

import { calculateDiscountValue } from '../../shared/offer-full-price';
import { calculateInstallmentsValue } from '../../shared/offer-installments';

import { LineOffer, ContainerText, OfferTitle, OfferFullPrice, ContainerDiscountPercentage, DiscountPercentage, OfferInstallments, ContantInput} from './styles';

function Card(props) {
    return (
      <LineOffer isSelected={props.offer.id === props.offerSelected?.id}>
        <ContainerText>
          <OfferTitle>{`${props.offer.title} | ${props.offer.description}`}</OfferTitle>
          <OfferFullPrice>
            {calculateDiscountValue(
              props.offer.fullPrice,
              props.offer.discountAmmount
            )}
          </OfferFullPrice>
          <ContainerDiscountPercentage>
            <DiscountPercentage>
              {" "}
              -{props.offer.discountPercentage * 100}%
            </DiscountPercentage>
          </ContainerDiscountPercentage>
          <OfferInstallments>
            {calculateInstallmentsValue(
              props.offer.installments,
              props.offer.fullPrice
            )}
          </OfferInstallments>
        </ContainerText>
        <ContantInput className="containerInput"></ContantInput>
      </LineOffer>
    );
  }
  
  export default Card;