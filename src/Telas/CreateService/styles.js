import React from 'react';
import styled from 'styled-components/native';
//corrigir
export const Container = styled.View`
    background-color: #fff ;
    flex:1;
    /* justify-content:center; */
    align-items:center;
`;

export const HeaderTitle = styled.Text `
    width: 280px;
    font-size: 24px;
    font-weight: bold;
    color: #268596;
    padding-bottom:25px;
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
    background-color: #fff;


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
    font-size: 18px;
    color: #268596;
    margin-bottom: 15px;
    margin-left: 5px;
    text-decoration: underline;
`;

export const SliderArea = styled.View`
    width: 100%;
    height: 60px;
    background-color:#fff;
    flex-direction: row;
    border-radius: 30px; 
    padding-left: 15px;
    align-items: center;
    justify-content: space-around;
    margin: 15px 0px;
    border: 0.5px solid #268596;
`
export const BackButton = styled.TouchableOpacity`
    margin-top: 22px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
`;
