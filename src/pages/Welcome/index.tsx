import React from 'react';

import { Container, Wrapper, Title, Image, Description, Button, ButtonText, Icon } from './styles';

import wateringImg from '../../assets/watering.png'
import { useNavigation } from '@react-navigation/native';

const Welcome: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Wrapper>
      <Title>Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil</Title>
      <Image source={wateringImg}/>

      <Description>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Description>

     <Button onPress={() => navigation.navigate('UserIdentification')}>
       <ButtonText>
         <Icon name='chevron-right' style={{}} />
       </ButtonText>
     </Button>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
