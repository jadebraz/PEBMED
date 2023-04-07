import styled from 'styled-components';


export const ContainerInput = styled.form`
    margin-bottom: 20px;
`
export const InputValue = styled.input`
    cursor: pointer;
    outline: none;
    font-style: normal;
    /* background: red; */
    letter-spacing: -0.02em;
    width: 80%;
    border:  #a9a1bd;
    padding: 10px 0px;
    margin-bottom: 5px;
    font-size: 13px;
    text-transform: uppercase;

    @media only screen and (max-width: 450px) {
        font-size: 19px;
    }
`
export const LineInput = styled.div`
    border: 1px solid #F4F3F6;
    width: 80%;
    margin-bottom: 30px;

    @media only screen and (max-width: 800px) {
    width: 95%;
    }
`
export const Name = styled.form`
    font-size: 13px;
    color: #666173;

    @media only screen and (max-width: 450px) {
    font-size: 18px;
    }
`