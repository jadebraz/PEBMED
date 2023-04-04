import React from 'react';
import '../../App.css';
import Logow from '../../assets/img/logow.png';
import Arrow from '../../assets/img/arrow.png';
import {Container, Logo, IArrow} from './styles';

function Header() {
  return (
    <Container>  
        <Logo src={Logow}/>  
        <IArrow src={Arrow}/>  
    </Container> 
  );
}

export default Header;