import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Button from '../../components/Button';

import { Container, Wrapper, Emoji, Title, Text, Footer } from './styles';

const Confirmation: React.FC = () => {
  const navigation = useNavigation()

  const handleMoveOn = () => {
    navigation.navigate('PlanSelect')
  }

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
          <Button title='Começar' onPress={handleMoveOn} />
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Confirmation;
