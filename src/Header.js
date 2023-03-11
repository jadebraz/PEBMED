import React from 'react';
import Logow from './img/logow.png';
import Arrow from './img/arrow.png';


function Header () {
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