import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Title, Photo, Details, TimeLabel, Time } from './styles';

interface PlantCardSecondaryProps extends RectButtonProperties {
    name: string;
    photo: string;
    hour: string;
}

const PlantCardSecondary: React.FC<PlantCardSecondaryProps> = ({ name, photo, hour, ...rest }) => {
  return (
    <Container {...rest}>
      <Photo uri={photo}/>
      <Title>{name}</Title>
      <Details>
        <TimeLabel>
          Regar às
        </TimeLabel>
        <Time>
          {hour}
        </Time>
      </Details>
    </Container>
  );
};

export default PlantCardSecondary;
