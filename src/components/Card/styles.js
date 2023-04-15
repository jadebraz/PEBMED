import styled from 'styled-components';

export const LineOffer = styled.div.attrs((props) => ({
    border: props.isSelected ? "1px solid #191847" : "1px solid #E1DEE8",
  }))`
    height: 100px;
    border-radius: 15px;
    display: flex;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    border: ${(props) =>
      props.isSelected ? "1px solid #191847" : "1px solid #E1DEE8"};
    box-shadow: 0px 8px 10px #00000056;
  `;
  export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  export const OfferTitle = styled.div`
    margin: 0px 20px 0px;
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
    width: 200px;
  
    @media only screen and (max-width: 450px) {
      font-size: 17px;
      width: 300px;
    }
  `;
  export const OfferFullPrice = styled.div`
    font-size: 12px;
    width: 200px;
    font-weight: 400;
    margin-left: 20px;
    font-style: normal;
    color: #191847;
    line-height: 16px;
  
    @media only screen and (max-width: 450px) {
      font-size: 13px;
    }
  `;
  export const OfferInstallments = styled.div`
    font-size: 10px;
    width: 180px;
    font-weight: 400;
    margin-left: 20px;
    margin-top: 5px;
    font-style: normal;
    color: #f5850b;
    line-height: 13px;
  
    @media only screen and (max-width: 450px) {
      font-size: 11.5px;
    }
  `;
  export const ContainerDiscountPercentage = styled.div`
    width: 40px;
    height: 16px;
    left: 210px;
    top: 40.5px;
    position: absolute;
    background: #f5850b;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  
    @media only screen and (max-width: 800px) {
      margin-left: 150px;
    }
  `;
  export const DiscountPercentage = styled.div`
    font-size: 10px;
    color: #ffffff;
    font-weight: 400;
  `;
  export const ContantInput = styled.div`
    input {
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      margin-top: 41px;
      margin-left: 40px;
      cursor: pointer;
    }
  `;