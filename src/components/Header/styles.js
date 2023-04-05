import styled from 'styled-components';

export const Container = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 31px;

    @media only screen and (max-width: 450px) {
     width: 135vw;
    }
`
export const Logo = styled.img`

    display: flex; 
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 450px) {
        width: 36px;
        height: 30px;
        display: flex;
        align-items:center;
        margin-top: 0px;
    }
`
export const IArrow = styled.img`
    position:absolute;
    width: 8px;
    height: 12px;
    left: 68px;
    margin-top:-9px;

`