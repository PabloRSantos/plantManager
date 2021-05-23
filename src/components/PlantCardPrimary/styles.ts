import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors'
import { fonts } from '../../styles/fonts';
import {SvgFromUri} from 'react-native-svg'

export const Container = styled(RectButton)`
    flex: 1;
    max-width: 45%;
    background-color: ${colors.shape};
    border-radius: 20px;
    padding: 10px 0;
    align-items: center;
    margin: 10px;
`;

export const Name = styled.Text`
    color: ${colors.green_dark};
    font-family: ${fonts.heading};
    margin: 16px 0;
`

export const Photo= styled(SvgFromUri).attrs(() => ({
    width: 70,
    height: 70
}))``