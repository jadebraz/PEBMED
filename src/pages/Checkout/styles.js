import styled from 'styled-components';

export const ContainerMain = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 820px;
    margin-top: 90px;
`
export const ContainerForm = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;


    @media only screen and (max-width: 1133px) {
        width: 50%;
        height: 90%;
        position: absolute;
        margin-left: -700px;
        margin-top: -540px;
    }
    @media only screen and (max-width: 900px) {
        width: 50%;
        height: 90%;
        position: absolute;
        margin-left: -700px;
        margin-top: -550px;
    }
    @media only screen and (max-width: 800px) {
        width: 50%;
        height: 100%;
        position: absolute;
        margin-left: -800px;
        margin-top: -480px;
    }
    @media only screen and (max-width: 700px) {
        width: 600px;
        height: 100%;
        position: absolute;
        margin-left: -150px;
        margin-top: 400px;
    }
    @media only screen and (max-width: 450px) {
        width: 450;
        height: 100%;
        position: absolute;
        margin-left: -120px;
        margin-top: 550px;
    }
`
export const Title = styled.text`
    position: absolute;
    width: 497px;
    height: 100vh;
    left: 248px;
    top: 132px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #151516;
`
export const Subtitle = styled.text`
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
`

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 215px;
    height: 50px;
    left: 300px;
    top: 218px;
`
export const ContainerIugu = styled.div`
    width: 100px;
    position: absolute;
    left: 20%;
    top: 70%;

    img{
    width: 28px;
    position: absolute;
    left: 80%;
    top: 30%;
}
`
export const TitleIugu = styled.div`
    font-size: 10px;
    color: #E1DEE8;
`


export const ContainerUser = styled.div`
    position: absolute;
    left: 248px;
    top: 300px;
    font-size: 12px;
`

export const Form = styled.form`
    width: 495px;
`
export const ContainerInput = styled.form`
    margin-bottom: 20px;
`

export const Input = styled.input`
    cursor: pointer;
    outline: none;
    font-style: normal;
    letter-spacing: -0.02em;
    width: 80%;
    border:  #a9a1bd;
    padding: 10px 0px;
    /* background: red; */
    margin-bottom: 5px;
    font-size: 13px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover{
    box-shadow: 0px 10px 20px #00000056;
    font-weight: 400;
    border-radius: 10px;
    }
`
export const LineInput = styled.div`
    border: 1px solid #F4F3F6;
    width: 80%;
    margin-bottom: 30px;
`
export const Name = styled.form`
    font-size: 13px;
    color: #666173;
`
export const ContainerFlex = styled.div`
    display: flex;
    gap: 02px;
    margin-bottom: -20px;
`
export const Installments = styled.div`
    font-size: 13px;
    color: #666173;

    select{
    display: flex;
    border: none;
    margin-top: 13px;
    width: 80%;
    margin-bottom: 17px;
    cursor: pointer;
    outline: none;
    }
`
export const SubmitBtn = styled.button`
    width: 80%;
    font-size: 14px;
    padding: 12px;
    font-weight: 400;
    border-radius: 25px;
    background: #191847;
    color: #ffffff;
    height: 50px;
    margin-top: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;

    &:hover{
    transform: scale(1.01);
    background: #1f1d69;
    color: #ffffff;
    font-weight: 400;
}
`
export const Plan = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: end;


    @media only screen and (max-width: 1133px) {
        width: 40%;
        height: 90%;
        position: absolute;
        margin-left: 450px;
        margin-top: -530px;
    }
    @media only screen and (max-width: 900px) {
        width: 30%;
        height: 90%;
        position: absolute;
        margin-left: 500px;
        margin-top: -50px;
    }
    @media only screen and (max-width: 700px) {
        width: 50%;
        height: 100%;
        position: absolute;
        left: -230px;
        margin-top: 400px;
    }
    @media only screen and (max-width: 800px) {
        width: 50%;
        height: 50%;
        position: absolute;
        margin-left: 350px;
        margin-top: -300px;   
    }

    /* @media only screen and (max-width: 450px) {
        width: 50%;
        height: 50%;
        position: absolute;
        margin-left: 300px;
        margin-top: -700px;   
    } */
`
export const Premium = styled.div`
    width: 330px;
    display: flex;
    margin-top:-600px;
`
export const Emaill = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 200px;
    height: 50px;
    font-size: 20px;
    top: 131px;

    h2{
    width: 150px;
    height: 24px;
    top: 160px;
    font-size: 11px;
    font-weight: 400;
    margin-top: 6px;
    outline: none;
    border: 1px solid #F4F3F6;
    border-radius: 12px;
    color: #151516;
    }

    h3{
    width: 120px;
    height: 15px;
    margin-top: -20px;
    margin-left: 18.5px;
    font-size: 11px;
    font-weight: 400;
    }
    @media only screen and (max-width: 900px) {
        width: 80%;
        height: 50%;
        position: absolute;
        margin-top: -245px;
    }
    @media only screen and (max-width: 800px) {
        width: 80%;
        height: 30%;
        position: absolute;
        margin-top: -250px;   
    }
    @media only screen and (max-width: 450px) {
        width: 100%;
        margin-top: -200px;
    }
`
export const CardOfferr = styled.div`
    position: absolute;
    width: 330px;
    font-family: 'DM Sans', sans-serif;
    height: 230px;
    top: 218px;

    @media only screen and (max-width: 900px) {
        height: 90%;
        position: absolute;
        margin-top: -250px;
    }
    @media only screen and (max-width: 450px) {
        margin-top:-200px;   
    }
`
export const Line = styled.div`
    height: 100px; 
    border: 1px solid #191847;
    border-radius: 15px;
    display: flex;
    position: relative;
    transition: all 0.3s ease;

    &:hover{
    transform: scale(1.01);
    background: #f5f5f7;
    border: none;
    }
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
    margin:  0px 20px 0px;
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
    width: 200px;
    }

    p{
    font-size: 12px;
    width: 200px;
    font-weight: 400;
    margin-left: 20px;
    font-style: normal;
    color: #191847;
    line-height: 16px;
    }

    h4{
    font-size: 10px;
    width: 180px;
    font-weight: 400;
    margin-left: 20px;
    margin-top: 5px;
    font-style: normal;
    color: #F5850B;
    line-height: 13px;
    }
`
export const ContainerDiscountPercentage = styled.div`
    width: 40px;
    height: 16px;
    left: 210px;
    top: 40.5px;
    position: absolute;
    background: #F5850B;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`
export const DiscountPercentage= styled.div`
    font-size: 10px;
    color: #FFFFFF;
    font-weight: 400;
`
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
`
export const About = styled.div`
    p{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #151516;
    margin-top: 10px;
    margin-left: -10px;
    }

    img{
    display: flex;
    flex-direction: column;
    width: 15px;
    margin-left: 210px;
    margin-top: -15px;
    cursor: pointer;
}
`

