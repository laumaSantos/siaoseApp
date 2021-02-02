import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top: 40px;
    padding-right: 10px;
    padding-left:10px;
    padding-bottom: 10px;
    flex: 1;
    background-color: #fa8072;


`;

export const Scroller = styled.ScrollView`
    flex:1;
    padding: 2px;
    
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

`;
export const HeaderTitle = styled.Text `
    width: 280px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;
export const SearchButton = styled.TouchableHighlight`
    width: 26px;
    height: 26px;
`;

export const LocationArea = styled.View `
    background-color: #cd5c5c;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;

`;
export const LocationInput = styled.TextInput `
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;
export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;

`;

export const LoadingIcon = styled.ActivityIndicator `
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;


