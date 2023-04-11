import React from 'react';

import { ContainerInput, Name, InputValue, LineInput } from './styles';

function Input(props) {
    return (
        <ContainerInput>
            <Name>{props.label}</Name>
            <InputValue
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                maxLength={props.maxLength}
                required={props.required}
                name={props.name}
                autoComplete={props.autoComplete}
                onChange={props.onChange}>
            </InputValue>
            <LineInput></LineInput>
        </ContainerInput>
    );
  }
  
  export default Input;