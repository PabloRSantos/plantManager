import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { SvgFromUri } from "react-native-svg";

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin: 5px 0;
`;

export const AnimatedContainer = styled.View``
export const ButtonRemove = styled(RectButton)`
  width: 120px;
  height: 85px;
  background-color: ${colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
`

export const Title = styled.Text`
  flex: 1;
  font-family: ${fonts.heading};
  font-size: 17px;
  margin-left: 10px;
  color: ${colors.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
`;
export const TimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;
export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;

export const Photo = styled(SvgFromUri).attrs(() => ({
  width: 50,
  height: 50,
}))``;
