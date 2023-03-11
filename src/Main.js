import React from 'react';
import Mastercard from './img/mastercard.png';
import Cinza from './img/cinza.png';
import American from './img/american.png';
import Logo from './img/elo.png';
import Visa from './img/visa.png';
import Iugu from './img/iugu.png';
import Interrogation from './img/interrogation.png';

function Main () {
    return (
      
       <main>
        <section id='home'>
        <div className='container'>
            <div className='left'>
               <div className='title'>

                  <h1>Estamos quase lá!</h1>
                  <h2>Insira seus dados de pagamento abaixo:</h2>

               </div>

               <div className='card'>

                  <div className='box1'>
                    <img src={Mastercard}/>
                  </div>

                  <div className='box2'>
                     <img src={Cinza}/>
                  </div>

                  <div className='box3'>
                    < img src={American}/> 
                  </div>

                  <div className='box4'>
                    < img src={Visa}/>
                  </div>

                  <div className='box5'>
                    <img src={Logo}/>
                  </div>

                  <div className='iugu'>
                    <h1>Pagamentos por</h1>
                    <img src={Iugu}/>
                  </div>

               </div>


{/* BOX 2*/}


               <div className='label'>
                    <form action="">

                      <div className='row'>

                        <div className='col'>    

                          <div className='inputBox'>
                            <span>Número do cartão</span>
                            <input type='number' placeholder='0000 0000 0000 0000'></input>
                            <h1></h1>
                          </div>

                          <div className='flex'>

                            <div className='inputBox'>
                              <span>Validade</span>
                              <input type='text' placeholder='MM/AA'></input>
                              <h1></h1>
                            </div>

                            <div className='inputBox'>
                              <span>CVV</span>
                              <input type='number' placeholder='000'></input>
                              <h1></h1>
                            </div>

                          </div>

                          <div className='inputBox'>
                            <span>Nome impresso no cartão</span>
                            <input type='text' placeholder='Seu nome'></input>
                            <h1></h1>
                          </div>

                          <div className='inputBox'>
                            <span>CPF</span>
                            <input type='number' placeholder='000.000.000-00'></input>
                            <h1></h1>
                          </div>

                          <div className='inputBox'>
                            <span>Cupom</span>
                            <input type='text' placeholder='Insira aqui'></input>
                            <h1></h1>
                          </div>

                          <div className='inputBox'>
                            <span>Número de parcelas</span>
                            <input type='number' placeholder='Selecionar'></input>
                            <h1></h1>
                          </div>

                        </div>

                      </div>

                      <input type="submit" value="Finalizar pagamento" class="submit-btn"></input>
                    
                    </form>
               </div>

            </div>


{/* BOX 3 */}


            <div className='right'>


               <div className='email'>
                  <span>Confira o seu plano:</span>
                  <input type='email' placeholder='fulano@cicrano.com.br'></input>
               </div>

              <div className='card'>

                  <div className='line1'>
                      <h1>Anual | À Vista</h1>
                      <p>De R$ 514,80  |Por R$ 436,90</p>
                      <h2></h2>
                      <h3>-15%</h3>

                      <label className='label'>
                        <input type='radio' value='label'></input>
                      </label>

                      <h4>10x de R$ 43,69/mês</h4>
                  </div>

                  <div className='line2'>
                        <h1>Anual | À Vista</h1>
                        <p>De R$ 514,80  |Por R$ 436,90</p>
                        <h2></h2>
                        <h3>-7%</h3>

                        <label className='label'>
                          <input type='radio'></input>
                        </label>

                        <h4>10x de R$ 43,69/mês</h4>
                  </div>

               </div>


               <div className='about'>
                  <p>Sobre a cobrança</p>
                  <img src={Interrogation}/>
               </div>

            </div>

        </div>
    </section>

  </main>
    


    );
  }
  
  export default Main;