// import React from 'react';
import React, {  useState } from "react";

import { ContainerInput, Name, InputValue } from './styles';

function Input(props) {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <ContainerInput>
            <Name>{props.label}</Name>
            <InputValue isFocused={isFocused} isErrored={props.error}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                maxLength={props.maxLength}
                required={props.required}
                name={props.name}
                autoComplete={props.autoComplete}
                onChange={props.onChange}>
            </InputValue>
        </ContainerInput>
    );
  }
  
  export default Input;