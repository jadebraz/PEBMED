import React from 'react';

import { SubmitButton } from './styles';

function Button(props) {
    return (
        <SubmitButton type="submit">{props.label}</SubmitButton>
    );
  }
  
  export default Button;