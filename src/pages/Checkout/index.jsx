import '../../App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {api} from "../../services/ApiServices";
import Mastercard from '../../assets/img/mastercard.png';
import Cinza from '../../assets/img/cinza.png';
import American from '../../assets/img/american.png';
import Logo from '../../assets/img/elo.png';
import Visa from '../../assets/img/visa.png';
import Iugu from '../../assets/img/iugu.png';
import Interrogation from '../../assets/img/interrogation.png';

function Checkout() {
  const navigate = useNavigate();

  const [offers, setOffers] = useState()

  const [values, setValues] = useState() 

  const onChange = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();
     const response = await api.post('/subscription', values);
     
    if (response.status === 200) {
      navigate('/success');
    } else {
      alert ('Erro na realização da assinatura')
    }
  }

  useEffect(() => {
    api.get('/offer').then(response => setOffers(response.data));
  }, []);

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
                <img src={Mastercard} />
              </div>

              <div className='box2'>
                <img src={Cinza} />
              </div>

              <div className='box3'>
                < img src={American} />
              </div>

              <div className='box4'>
                < img src={Visa} />
              </div>

              <div className='box5'>
                <img src={Logo} />
              </div>

              <div className='iugu'>
                <h1>Pagamentos por</h1>
                <img src={Iugu} />
              </div>

            </div>

            <div className='label'>
              <form onSubmit={handleSubmitForm}>

                <div className='row'>

                  <div className='col'>

                    <div className='inputBox'>
                      <span>Número do cartão</span>
                      <input type='text' placeholder='0000 0000 0000 0000' maxlength='19' required name = 'nCartao' onChange={onChange}></input>
                      <h1></h1>
                    </div>

                    <div className='flex'>

                      <div className='inputBox'>
                        <span>Validade</span>
                        <input type='text' placeholder='MM/AA' maxlength='5' name ='validade' required onChange={onChange}></input>
                        <h1></h1>
                      </div>

                      <div className='inputBox'>
                        <span>CVV</span>
                        <input type='text' placeholder='000' maxlength='3' name = 'cvv' required onChange={onChange}></input>
                        <h1></h1>
                      </div>

                    </div>

                    <div className='inputBox'>
                      <span>Nome impresso no cartão</span>
                      <input type='text' placeholder='Seu nome' maxlength='25' name = 'nome' required  onChange={onChange}></input>
                      <h1></h1>
                    </div>

                    <div className='inputBox'>
                      <span>CPF</span>
                      <input type='text' placeholder='000.000.000-00' maxlength='11' name = 'cpf' required onChange={onChange}></input>
                      <h1></h1>
                    </div>

                    <div className='inputBox'>
                      <span>Cupom</span>
                      <input type='text' placeholder='Insira aqui' maxlength='20' name = 'cupom' required onChange={onChange}></input>
                      <h1></h1>
                    </div>

                    <div className='inputBox'>
                      <span>Número de parcelas</span>
                      <input type='text' placeholder='Selecionar' maxlength='2' name = 'parcelas' required onChange={onChange}></input>
                      <h1></h1>
                    </div>

                  </div>

                </div>

                <input type="submit" value="Finalizar pagamento" class="submit-btn"></input>
                
              </form>
            </div>
          </div>
        
          <div className='right'>
            <div className='right2'>
              <div className='email'>
                <span>Confira o seu plano:</span>
                <h2></h2>
                <h3>fulano@cicrano.com.br</h3>
              </div>
              
            <div className='card'>
              { offers?.map(offer => (
                <>
                  <div key={offer.id} className='line1'>
                    <div className='containerText'>
                      <h1>{`${offer.title} | ${offer.description}`}</h1>
                      <p>{`De ${offer.fullPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | Por ${(offer.fullPrice - offer.discountAmmount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>
                      <div className='containerDiscountPercentage'>
                        <h3 className='discountPercentage'> -{(offer.discountPercentage * 100)}%</h3>
                      </div>
                      <h4>{`${offer.installments.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}x de ${(offer.fullPrice / offer.installments).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}/mês`}</h4>
                    </div>
                    <div className='containerInput'>
                      <input name= "plan" type="radio"/>
                    </div>
                    
                  </div>
                  <br />
                </>
              ))}
            </div>
            
            <div className='about'>
                <h1></h1>
                <p>Sobre a cobrança</p>
                <img src={Interrogation} />  
            </div>

            </div>
          </div>
        </div>
      </section>
    </main>     
  );
}

export default Checkout;