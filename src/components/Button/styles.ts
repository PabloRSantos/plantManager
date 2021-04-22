import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const Container = styled(RectButton)`
    background-color: ${colors.green};
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    height: 56px;
    width: 100%;
`

export const ButtonText = styled.Text`
    color: ${colors.white};
    font-size: 16px;
    font-family: ${fonts.heading};
`