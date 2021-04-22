import React from 'react';
import Button from '../../components/Button';

import { Container, Wrapper, Emoji, Title, Text, Footer } from './styles';

const Confirmation: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Emoji>
          😄
        </Emoji>

        <Title>
          Prontinho
        </Title>

        <Text>
          Agora vamos começar a cuidar das suas plantinhas
          </Text>        

        <Footer> 
          <Button title='Começar' />
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Confirmation;
