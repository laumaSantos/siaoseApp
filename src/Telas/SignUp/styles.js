import React from 'react';
import styled from 'styled-components/native';
//corrigir
export const Container = styled.View`
    background-color: #ffa07a ;
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const InputArea = styled.View `
    width: 100%;
    padding: 25px 40px;
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
`;

//texto
export const SignMessageButton =  styled.TouchableOpacity `
    flex-direction: row;
    justify-content:center;
    margin-top:10px;

`;
export const SignMessageButtonText = styled.Text `
    font-size: 16px;
    color:#cd5c5c;
`;
export const SignMessageButtonTextBold = styled.Text `
    font-size: 16px;
    color:#cd5c5c;
    font-weight: bold;
    margin-left: 5px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
    
`;

export const UserAvatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFF;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
    align-items: center;
`
