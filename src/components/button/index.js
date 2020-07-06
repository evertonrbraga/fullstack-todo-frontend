import React from "react";

import { Container } from "./styles";

const Button = ({ text, color, click, size, disabled = false }) => {
  return (
    <Container onClick={click} size={size} disabled={disabled} btnColor={color}>
      {text}
    </Container>
  );
};

export default Button;
