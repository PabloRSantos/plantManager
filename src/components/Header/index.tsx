import React, { useEffect, useState } from 'react';

import { Container, Wrapper, Title, Username, ImageUser } from './styles';

import userImg from '../../assets/pablo.png'
import { ViewStyle } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Header: React.FC<ViewStyle> = (props) => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const getUsername = async () => {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || '')
    }

    getUsername()

  }, [])

  return (
    <Container {...props}>
      <Wrapper>
        <Title>Olá,</Title>
        <Username>{userName}</Username>
      </Wrapper>

      <ImageUser source={userImg} />
    </Container>
  );
};

export default Header;
