import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Button from '../../components/Button';


import { Container, Wrapper, Form, Emoji, Input, Text, Footer } from './styles';

const UserIdentification: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  const navigation = useNavigation()

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  const handleInputChange = (value: string) => {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Form>
          <Emoji>
            {isFilled ? 
            '😃' : '😬' 
          }
          </Emoji>
          <Text>
            Como podemos {'\n'}chamar você?
          </Text>
          <Input
          isFocused={isFocused || isFilled}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onChangeText={handleInputChange}
          placeholder='Digite um nome' />

          <Footer>
            <Button onPress={() => navigation.navigate('Confirmation')} />
          </Footer>
        </Form>
          </TouchableWithoutFeedback>
    </Container>
  );
};

export default UserIdentification;
