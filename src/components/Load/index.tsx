import React from 'react';

import { Container, Lottie } from './styles';
import loadAnimation from '../../assets/load.json'

const Load: React.FC = () => {
  return (
    <Container>
      <Lottie source={loadAnimation} />
    </Container>
  );
};

export default Load;
