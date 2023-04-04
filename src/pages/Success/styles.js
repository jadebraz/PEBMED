import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    /* background: red; */
    font-family: 'DM Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 700px;
`
export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
`
export const Ellipse = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    top: 150px;
    border-radius: 50px;
    border: 2px solid #F4F3F6;

    h2{
    margin-top: 15px;
    margin-left: 18px;
}
`
export const TextSuccess = styled.div`
    width: 220px;
    height: 100px;
    margin-top: -15px;
    margin-bottom: 18px;

    h1{
    margin-left: 65px;
    font-family: 'Google Sans' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #191847;
}

    p{
    font-family: 'Google Sans' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #C9C5D4;
    margin-left: -10px;
    margin-top: 11px;
}
`
export const Card = styled.div`
    width: 343px;
    height: 200px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
`
export const Offer = styled.div`
    border: 1px solid rgb(241, 241, 241);
    width: 310px;
    height: 80px;
    margin: 16px;
    background: #F4F3F6;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
    transform: scale(1.01);
    background: #e4e4e9;
    font-weight: 400;
    }

    h1{
    font-family: 'Google Sans', sans-serif;
    margin-top: 15px;
    margin-right: 16px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #191847;
    }

    p{
    font-family: 'Google Sans', sans-serif;
    margin-top: 10px;
    margin-right: 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: right;
    color: #191847;
    }
    
    h2{
    width: 40px;
    height: 40px;
    margin-left: 25px;
    margin-top: -40px;
    background: #E1DEE8;
    border-radius: 50px;
    }

    img{
    margin-left: 12px;
    margin-top: 11px;
    }
`
export const Email = styled.div`
    margin-top: 23px;

    span{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #C9C5D4;
    margin-left: 22px;
    }

    p{
    width: 160px;
    margin-left: 170px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #151516;
    margin-top: -19px;
    }
`
export const Cpf = styled.div`
    font-family:  sans-serif;
    margin-top: 20px;

    span{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #C9C5D4;
    margin-left: 24px;
    }

    p{
    width: 120px;
    margin-left: 169px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #151516;
    margin-top: -16px;
    }
`
export const Signature = styled.div`
    width: 152px;
    left: 705px;
    margin-top: 40px;
    font-weight: 700;
    font-size: 12px; 
    letter-spacing: 0.05em; 
    color: #191847;
`
export const InputHome = styled.div`
    width: 310px;
    height: 50px;
    left: 615px;
    font-size: 12px;
    margin-top: 25px;
    background: #191847;
    color: white;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
    transform: scale(1.01);
    background: #1f1d69;
    font-weight: 400;
}
`



