import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { ButtonText, Container } from "./styles";

interface ButtonProps extends RectButtonProperties {
  title?: string;
}

const Button: React.FC<ButtonProps> = ({ title = 'Confirmar', ...rest }) => {
  return ( 
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default Button;
