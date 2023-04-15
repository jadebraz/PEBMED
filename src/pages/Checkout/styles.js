import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 820px;

  @media only screen and (max-width: 800px) {
    width: 330px;
  }
`;
export const ContainerForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1133px) {
    width: 70%;
    height: 900px;
    position: absolute;
    margin-left: -700px;
    margin-top: 220px;
  }
  @media only screen and (max-width: 900px) {
    width: 50%;
    height: 900px;
    position: absolute;
    margin-top: 220px;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 250px;
    margin-top: 1000px;
  }
  @media only screen and (max-width: 700px) {
    width: 600px;
    height: 100%;
    position: absolute;
    margin-left: 0px;
    margin-top: 990px;
  }
  @media only screen and (max-width: 550px) {
    margin-left: -70px;
  }
  @media only screen and (max-width: 450px) {
    width: 450;
    height: 100%;
    position: absolute;
    margin-left: -120px;
    margin-top: 1050px;
  }
`;
export const Title = styled.p`
  position: absolute;
  width: 497px;
  height: 90%;
  left: 248px;
  top: 132px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #151516;

  @media only screen and (max-width: 450px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 900px) {
    top: 0px;
  }
  @media only screen and (max-width: 1133px) {
    top: 0px;
  }
`;
export const Subtitle = styled.p`
  position: absolute;
  width: 311px;
  height: 21px;
  left: 248px;
  top: 167px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #151516;

  @media only screen and (max-width: 1133px) {
    top: 30px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 900px) {
    top: 30px;
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 215px;
  height: 50px;
  left: 300px;
  top: 218px;

  @media only screen and (max-width: 1133px) {
    top: 80px;
  }
  @media only screen and (max-width: 900px) {
    top: 80px;
  }
`;
export const ContainerIugu = styled.div`
  width: 100px;
  position: absolute;
  left: 20%;
  top: 70%;

  img {
    width: 28px;
    position: absolute;
    left: 80%;
    top: 30%;
  }
`;
export const TitleIugu = styled.div`
  font-size: 10px;
  color: #e1dee8;
`;
export const ContainerUser = styled.div`
  position: absolute;
  left: 248px;
  top: 300px;
  font-size: 12px;

  @media only screen and (max-width: 1133px) {
    top: 170px;
  }
  @media only screen and (max-width: 900px) {
    top: 170px;
  }
`;
export const Form = styled.form`
  width: 495px;
`;
export const ContainerInput = styled.div`
  margin-bottom: 20px;
`;
export const InputValue = styled.input`
  cursor: pointer;
  outline: none;
  font-style: normal;
  letter-spacing: -0.02em;
  width: 80%;
  border: #a9a1bd;
  padding: 10px 0px;
  margin-bottom: 5px;
  font-size: 13px;
  text-transform: uppercase;

  @media only screen and (max-width: 450px) {
    font-size: 19px;
  }
`;
export const Name = styled.p`
  font-size: 13px;
  color: #666173;

  @media only screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
export const ContainerFlex = styled.div`
  display: flex;
  gap: 60px;
  width: 80%;
`;
export const Installments = styled.div`
  font-size: 13px;
  color: #666173;

  select {
    display: flex;
    width: 80%;
    margin-bottom: 17px;
    cursor: pointer;
    outline: none;
    font-family: "DM Sans", sans-serif;
    padding: 10px 0px;
    margin-bottom: 5px;
    border: none;
    border-bottom: 1px solid #f4f3f6;

    @media only screen and (max-width: 800px) {
      width: 80%;
    }
    @media only screen and (max-width: 450px) {
      font-size: 19px;
    }
  }
`;
export const NumberInstalments = styled.div``;
export const Plan = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: end;
  margin-top: 30px;

  @media only screen and (max-width: 1133px) {
    width: 50%;
    height: 900px;
    display: flex;
    justify-content: center;
    margin-left: 450px;
  }
  @media only screen and (max-width: 900px) {
    width: 40%;
    height: 900px;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 700px) {
    width: 50%;
    height: 100%;
    position: absolute;
    left: -340px;
    margin-top: 450px;
  }
  @media only screen and (max-width: 800px) {
    width: 70%;
    height: 50%;
    position: absolute;
    margin-top: -250px;
  }
`;
export const Premium = styled.div`
  width: 330px;
  height: 900px;
  display: flex;
`;
export const ContainerEmailCheckout = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 200px;
  height: 50px;
  top: 131px;

  @media only screen and (max-width: 900px) {
    width: 30%;
    height: 60%;
    position: absolute;
  }
  @media only screen and (max-width: 800px) {
    width: 60%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -130px;
  }
  @media only screen and (max-width: 550px) {
    width: 300px;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;
export const EmailCheckout = styled.div`
  width: 133px;
  height: 15px;
  margin-top: 5px;
  font-size: 11px;
  font-weight: 400;
  border: 1px solid #f4f3f6;
  border-radius: 12px;
  padding: 10px 10px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 800px) {
    font-size: 15px;
    width: 180px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 15px;
    width: 180px;
  }
`;
export const NameEmailCheckout = styled.div`
  font-size: 20px;
  width: 250px;

  @media only screen and (max-width: 800px) {
    font-size: 25px;
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
export const ContainerCardOfferr = styled.div`
  position: absolute;
  width: 330px;
  font-family: "DM Sans", sans-serif;
  height: 230px;
  top: 218px;

  @media only screen and (max-width: 900px) {
    height: 80%;
    position: absolute;
    margin-top: 0px;
  }
  @media only screen and (max-width: 800px) {
    height: 300px;
    width: 470px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-top: -150px;
    margin-left: -70px;
  }
`;
export const ContainerAbout = styled.div`
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #151516;
    margin-top: -5px;
    margin-left: -10px;
    cursor: pointer;

    @media only screen and (max-width: 800px) {
      margin-left: -40px;
    }
  }

  img {
    display: flex;
    flex-direction: column;
    width: 15px;
    margin-left: 220px;
    margin-top: -15px;
    cursor: pointer;

    @media only screen and (max-width: 800px) {
      margin-left: 270px;
    }
  }
`;
