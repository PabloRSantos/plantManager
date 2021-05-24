import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Name, Photo } from './styles';

interface PlantCardPrimaryProps extends RectButtonProperties {
    name: string;
    photo: string;
}

const PlantCardPrimary: React.FC<PlantCardPrimaryProps> = ({ name, photo, ...rest }) => {
  return (
    <Container {...rest}>
      <Photo uri={photo}/>
      <Name>{name}</Name>
    </Container>
  );
};

export default PlantCardPrimary;
