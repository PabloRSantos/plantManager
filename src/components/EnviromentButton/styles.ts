import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import { fonts } from "../../styles/fonts";

interface ButtonProps {
  active: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  background-color: ${colors.shape};
  height: 40px;
  width: 76px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin: 0 5px;

  ${(props) =>
    props.active &&
    css`
      background-color: ${colors.green_light};
    `}
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${colors.heading};
  font-family: ${fonts.text};

  ${(props) =>
    props.active &&
    css`
      font-family: ${fonts.heading};
      color: ${colors.green_dark};
    `}
`;

