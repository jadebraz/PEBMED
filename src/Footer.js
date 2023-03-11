import React from 'react';
import Logow from './img/logow.png';
import Arrow from './img/arrow.png';
import Star from './img/star.png';
import True from './img/true.png';


function Footer() {
    return(
        <footer>
        
            <section id='header2'>
    
                <div className='assets'>
                    <img src={Logow}/>  
                </div>
    
                <div className='arrow'>
                    <img src={Arrow}/>  
                </div>
    
                <div className='ellipse'>
                    <h2>
                         <img src={True}/>
                    </h2>
                </div>
    
                <div className='success'>
                    <h1>Parabéns!</h1>
                    <p>Sua assinatura foi  realizada com sucesso</p>
                </div>


                <div className='cards'>
    
                    <div className='line'>
                    <h1>Anual | Parcelado</h1>
                    <p>R$ 479,90 | 10x R$ 47,99</p>
                        <h2>
                            <img src={Star}/>
                        </h2>
                    </div>
    
                    <div className='email'>
                        <span>E-mail</span>
                        <input type='email' placeholder='fulano@cicrano.com.br'></input>
                    </div>
    
                    <div className='cpf'>
                        <span>CPF</span>
                        <input type='number' placeholder='000.000.000-00'></input>
                    </div>
    
                </div>
    
                
                <div className='signature'>
                    <p>Gerenciar assinatura</p>
                </div>
    
                <input type="submit" value="IR PARA HOME" class="submit-btn"></input>
                
            </section>
    
        </footer>
    );
}

export default Footer