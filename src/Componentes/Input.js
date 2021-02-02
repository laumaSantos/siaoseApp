import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View `
    width: 100%;
    height: 60px;
    background-color:#fff;
    flex-direction: row;
    border: 0.5px solid #268596;
    border-radius: 30px; 
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #268596;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password, keyboardType}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#cd5c5c" />
            <Input
                keyboardType={keyboardType}
                placeholder={placeholder}
                placeholderTextColor= "#cd5c5c"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}