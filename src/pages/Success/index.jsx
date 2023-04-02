import React, { useEffect } from 'react';
import '../../App.css';
import './success.css'
import Star from '../../assets/img/star.png';
import True from '../../assets/img/true.png';
import { useLocation } from 'react-router-dom';

function Success() {

    const location = useLocation();

    useEffect(()=>{
        console.log(location);
    }, [])


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
                        <h1>{ location.state.offerSelected.title}</h1>
                        <p> {location.state.offerSelected.fullPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | {location.state.installments}x de {(location.state.offerSelected.fullPrice / location.state.installments).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</p>
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
                        <p>{ location.state.cpf}</p>
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