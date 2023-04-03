import React from 'react';
import '../../App.css';
import './header.css';
import Logow from '../../assets/img/logow.png';
import Arrow from '../../assets/img/arrow.png';
import {Container, Logo, IArrow} from './styles';

function Header() {
  return (
    <Container>  
        
            <div className='img'>
                <Logo src={Logow}/>  
            </div>

            <div className='arrow'>
                <IArrow src={Arrow}/>  
            </div>
        
    </Container> 
  );
}

export default Header;