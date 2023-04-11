import styled from 'styled-components';

export const SubmitButton = styled.button`
    width: 80%;
    font-size: 14px;
    padding: 12px;
    font-weight: 400;
    border-radius: 25px;
    background: #191847;
    color: #ffffff;
    height: 50px;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.0s ease;
    font-family: 'DM Sans', sans-serif;

    &:hover{
    transform: scale(1.01);
    background: white;
    color: #191847;
    font-weight: 400;
    box-shadow: 0px 8px 15px #00000056;
    }
    @media only screen and (max-width: 800px) {
        width: 95%;
    }
    @media only screen and (max-width: 450px) {
        font-size: 18px;
    }
`