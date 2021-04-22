import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import {Feather} from '@expo/vector-icons'
import { fonts } from '../../styles/fonts';


export const Container = styled.SafeAreaView`
    flex: 1;
`; 

export const Wrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
`

export const Title = styled.Text`
    font-size: 28px;
    text-align: center;
    color: ${colors.heading};
    margin-top: 38px;
    font-family: ${fonts.heading};
    line-height: 34px;
`

export const Image = styled.Image.attrs(() => ({
    resizeMode: 'contain'
}))`
    height: ${Dimensions.get('window').width * 0.7}px;
`

export const Description = styled.Text`
    text-align: center;
    font-size: 18px;
    padding: 0 20px;
    color: ${colors.heading};
    font-family: ${fonts.text};
`

export const Button = styled(RectButton)`
    background-color: ${colors.green};
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: 56px;
    width: 56px;
`

export const ButtonText = styled.Text`
    color: ${colors.white};
    font-size: 24px;
`


export const Icon = styled(Feather)`
    font-size: 32px;
    color: ${colors.white};
`