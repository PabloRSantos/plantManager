import React from 'react';

import { Container, Wrapper, Title, Username, ImageUser } from './styles';

import userImg from '../../assets/pablo.png'
import { ViewStyle } from 'react-native';

const Header: React.FC<ViewStyle> = (props) => {
  return (
    <Container {...props}>
      <Wrapper>
        <Title>Olá,</Title>
        <Username>Rodrigo</Username>
      </Wrapper>

      <ImageUser source={userImg} />
    </Container>
  );
};

export default Header;
