import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-top: ${getStatusBarHeight()}px;
`;


export const Wrapper = styled.View``

export const Title = styled.Text`
    font-size: 32px;
    color: ${colors.heading};
    font-family: ${fonts.text};

`
export const Username = styled.Text`
    font-size: 32px;
    font-family: ${fonts.heading};
    color: ${colors.heading};
    line-height: 40px;
`

export const ImageUser = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 40px;
`