import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import Button from '../../components/Button';

import { Container, Wrapper, Emoji, Title, Text, Footer } from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😃'
}

const Confirmation: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute()
  
  const {  title, subtitle, buttonTitle, icon, nextScreen } = route.params  as Params

  const handleMoveOn = () => {
    navigation.navigate(nextScreen)
  }

  return (
    <Container>
      <Wrapper>
        <Emoji>
         {emojis[icon]}
        </Emoji>

        <Title>
          {title}
        </Title>

        <Text>
          {subtitle}
          </Text>        

        <Footer> 
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Confirmation;
