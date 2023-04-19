import React, { useEffect } from "react";

import { useToast } from "../../../hooks/toast";

import { Container } from "./styles";

const Toast = ({ message }) => {

    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 5000);
    }, [removeToast, message.id]);
    
  return (
    <Container>
      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>
    </Container>
  );
};

export default Toast;
