import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { fonts } from '../../styles/fonts';

interface InputProps {
    isFocused: boolean;
}

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const Wrapper = styled.KeyboardAvoidingView.attrs(() => ({
    behavior: Platform.OS === 'ios' ? 'padding' : 'height'
}))`
    flex: 1;
    width: 100%;
`

export const Form = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 54px;
`

export const Emoji = styled.Text`
    font-size: 44px;
`

export const Text = styled.Text`
    margin-top: 20px;
    line-height: 32px;
    font-size: 24px;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.heading}; 
`

export const Input = styled.TextInput<InputProps>`
    border-bottom-width: 1px;
    color: ${colors.heading};
    width: 100%;
    font-size: 18px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    border-color: ${(props) => props.isFocused ? colors.green : colors.gray};

`

export const Footer = styled.View`
    width: 100%;
    margin-top: 40px;
    padding: 0 20px;
`