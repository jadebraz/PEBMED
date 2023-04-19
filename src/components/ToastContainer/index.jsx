import React from 'react'; 

import { Container } from './styles';

import Toast from './Toast';

const ToastContainer = ({ messages }) => {
    return (
        <Container>
            {messages.map(message => (
                <Toast key={message.id} message={message} ></Toast>
            ))}
        </Container>
    );
};

export default ToastContainer;