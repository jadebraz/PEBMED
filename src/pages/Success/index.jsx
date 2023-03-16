import React from 'react';
import '../../App.css';
import Star from '../../assets/img/star.png';
import True from '../../assets/img/true.png';

function Success() {
  return (
    <footer>     
        <section id='header2'>
            <div className='center'>
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
                        <p>fulano@cicrano.com.br</p>
                    </div>
    
                    <div className='cpf'>
                        <span>CPF</span>
                        <p>000.000.000-00</p>
                    </div>
    
                </div>
                
            <div className='signature'>
                <p>Gerenciar assinatura</p>
            </div>
    
            <input type="submit" value="IR PARA HOME" class="submit-btn"></input>   
            </div>  
        </section>
    </footer>
  );
}

export default Success;