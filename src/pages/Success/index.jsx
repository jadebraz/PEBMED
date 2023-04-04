import React, { useEffect } from 'react';
import '../../App.css';
import './success.css'
import Star from '../../assets/img/star.png';
import True from '../../assets/img/true.png';
import { useLocation } from 'react-router-dom';
import { ContainerFooter, Center, Ellipse, TextSuccess, Card, Offer, Email, Cpf, Signature, InputHome} from './styles';

function Success() {

    const location = useLocation();

    useEffect(()=>{
        console.log(location);
    }, [])


  return (
    <ContainerFooter>     
            <Center>
                <Ellipse>
                    <h2>
                         <img src={True}/>
                    </h2>
                </Ellipse>

                <TextSuccess>
                    <h1>Parabéns!</h1>
                    <p>Sua assinatura foi  realizada com sucesso</p>
                </TextSuccess>


                <Card>
                    <Offer>
                        <h1>{location.state.offerSelected.title}</h1>
                        <p> {location.state.offerSelected.fullPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | {location.state.installments}x de {(location.state.offerSelected.fullPrice / location.state.installments).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</p>
                        <h2>
                            <img src={Star}/>
                        </h2>
                    </Offer>
    
                    <Email>
                        <span>E-mail</span>
                        <p>fulano@cicrano.com.br</p>
                    </Email>
    
                    <Cpf>
                        <span>CPF</span>
                        <p>{ location.state.cpf}</p>
                    </Cpf>
                </Card>
                
                <Signature>
                    <p>Gerenciar assinatura</p>
                </Signature>
    
                <InputHome type="submit" value="IR PARA HOME"></InputHome>   
            </Center>
    </ContainerFooter>
  );
}

export default Success;