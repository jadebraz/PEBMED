import styled, { css } from "styled-components";

const ContainerTypeVariations = {
    error: css`
    background: #FF0000;
    color: #c53030;
    `
}
export const Container = styled.div`
    width: 360px;
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba( 0, 0, 0, 0.2);
    display: flex;
    background: #fddede;
    color: #FF0000;
  
    & + div {
        margin-top: 8px;
    }

    ${(props) => ContainerTypeVariations[props.type || 'info']}

    div {
        flex: 1;
    
        p{
            margin-top: 4px;
            font-size: 14px;
            opacity: 0.8;
            line-height: 20px;
        }
    }

`