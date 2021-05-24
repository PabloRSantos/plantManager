import { Feather } from "@expo/vector-icons";
import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Animated from "react-native-reanimated";
import colors from "../../styles/colors";

import { Container, AnimatedContainer, ButtonRemove, Title, Photo, Details, TimeLabel, Time } from "./styles";

interface PlantCardSecondaryProps extends RectButtonProperties {
  name: string;
  photo: string;
  hour: string;
  handleRemove: () => void;
}

const PlantCardSecondary: React.FC<PlantCardSecondaryProps> = ({
  name,
  photo,
  hour,
  handleRemove,
  ...rest
}) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <AnimatedContainer>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </AnimatedContainer>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <Photo uri={photo} />
        <Title>{name}</Title>
        <Details>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{hour}</Time>
        </Details>
      </Container>
    </Swipeable>
  );
};

export default PlantCardSecondary;
