import styled from 'styled-components';

export const ContainerInput = styled.div`
    margin-bottom: 20px;
`
export const InputValue = styled.input`
    cursor: pointer;
    outline: none;
    font-style: normal;
    letter-spacing: -0.02em;
    /* background-color: red; */
    width: 80%;
    border: none;
    border-bottom: 1px solid #F4F3F6;
    padding: 10px 0px;
    margin-bottom: 5px;
    margin-top: 0px;
    font-size: 13px;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;

    @media only screen and (max-width: 450px) {
        font-size: 19px;
    }
`
export const Name = styled.p`
    font-size: 13px;
    color: #666173;

    @media only screen and (max-width: 450px) {
    font-size: 18px;
    }
`