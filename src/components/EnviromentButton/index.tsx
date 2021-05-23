import React from 'react';

import { Container, ButtonText } from './styles';
import {RectButtonProperties} from 'react-native-gesture-handler'

interface EnviromentButtonProps extends RectButtonProperties {
  title: string;
  active?: boolean
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({ title, active = false, ...rest}) => {
  return (
    <Container active={active} {...rest}>
      <ButtonText active={active}>{title}</ButtonText>
    </Container>
  );
};

export default EnviromentButton;
