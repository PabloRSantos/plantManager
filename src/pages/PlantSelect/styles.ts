import styled from 'styled-components/native';
import Header from '../../components/Header';
import colors from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    background: ${colors.background};
`;

export const Wrapper = styled.View`
    padding: 0 30px;
`

export const HeaderStyled = styled(Header)`
    padding: 20px 0;
`

export const Title = styled.Text`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    line-height:20px;
    margin-top: 15px;
`
export const Span = styled.Text`
    font-family: ${fonts.text};
    font-size:17px;
    line-height:30px;
    color: ${colors.heading};
`

export const List = styled.FlatList.attrs(() => ({
    contentContainerStyle: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32,
        marginLeft: 30
    }
}))`
    flex: .3;

`


export const PlantsList = styled.FlatList`
    padding: 0 30px;
    flex: 1;

`