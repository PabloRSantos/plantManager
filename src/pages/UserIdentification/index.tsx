import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Container, Form, Emoji, Input, Text, Footer } from './styles';

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

  const handleSubmit = async () => {
    if(!name) {
      return Alert.alert('Me diz como chamar você 😢')
    }

    await AsyncStorage.setItem('@plantmanager:user', name)

    navigation.navigate('Confirmation', {
      title: 'Prontinho',
      subtitle: 'Agora vamos começar a ciodar das suas plantinhas com muito cuidado.',
      buttonTitle: 'Começar',
      icon: 'smile',
      nextScreen: 'PlantSelect'
    })
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
            <Button onPress={handleSubmit} />
          </Footer>
        </Form>
          </TouchableWithoutFeedback>
    </Container>
  );
};

export default UserIdentification;
