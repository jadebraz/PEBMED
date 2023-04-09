import React from 'react';

import Logow from '../../assets/img/logow.png';
import Arrow from '../../assets/img/arrow.png';

import { Container, Logo, IArrow } from './styles';
import '../../App.css';

function Header() {
  return (
    <Container>  
        <Logo src={Logow}/>  
        <IArrow src={Arrow}/>  
    </Container> 
  );
}

export default Header;