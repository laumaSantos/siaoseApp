import React from 'react';
import styled from 'styled-components/native';
//corrigir
export const Container = styled.View`
    background-color: #ffa07a ;
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const ContainerHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`; 

export const UserAvatar = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFF;
`;

export const InputArea = styled.View `
    width: 100%;
    padding: 40px;
    background-color: #ffa07a;
`;

//botão login
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color:#fa8072;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text `
    font-size:18px;
    color:#FFF;
    padding-left: 10px;
    padding-right: 10px;
`;

export const CustomText = styled.Text`
    font-size: 22px;
    color: #fff;
    margin-bottom: 15px;
    margin-left: 5px;
`;

export const LabelText = styled.Text`
    font-size: 14px;
    color: #268596;
`;

export const BackButton = styled.TouchableOpacity`
    margin-top: 22px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
`;