import React from 'react';
import '../../App.css';
import './header.css';
import Logow from '../../assets/img/logow.png';
import Arrow from '../../assets/img/arrow.png';

function Header() {
  return (
    <header>  
        <section id='header'>
         
            <div className='img'>
                <img src={Logow}/>  
            </div>

            <div className='arrow'>
            <   img src={Arrow}/>  
            </div>
        
        </section>
    </header> 
  );
}

export default Header;