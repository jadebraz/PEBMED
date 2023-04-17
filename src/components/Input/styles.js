import styled from 'styled-components';


export const ContainerInput = styled.div`
    margin-bottom: 20px;
    border-radius: 5px;
 
`
export const InputValue = styled.input.attrs((props) => ({
    border: props.isFocused ? "2px solid #FF8C00" : props.isErrored ? "2px solid #FF0000" : "2px solid #E1DEE8" ,
  }))`
    cursor: pointer;
    outline: none;
    font-style: normal;
    letter-spacing: -0.02em;
    width: 80%;
    border: none;
    padding: 10px 0px;
    margin-bottom: 5px;
    margin-top: 0px;
    font-size: 13px;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
    border-bottom: ${(props) =>
     props.isFocused ? "2px solid #FF8C00" : props.isErrored ? "2px solid #FF0000" : "2px solid #E1DEE8"};

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