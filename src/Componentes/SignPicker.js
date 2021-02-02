import React from 'react';
import styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';

const InputArea = styled.View `
    width: 100%;
    height: 60px;
    background-color:#fff;
    border: 0.5px solid #268596;
    flex-direction: row;
    border-radius: 30px; 
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

export default ({IconSvg, placeholder, value, onChangeText}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#cd5c5c" />
            <Picker
                    selectedValue={value}
                    prompt={'Você é Profissional?'}
                    style={{ flex: 1,
                        fontSize: 16,
                        color: '#cd5c5c',
                        marginLeft: 10}}
                        onValueChange={onChangeText}>
                    <Picker.Item label="Selecione" value="none" />
                    <Picker.Item label="Não sou profissional" value="none" />
                    <Picker.Item label="- Cabelos" value="Cabelos" />
                    <Picker.Item label="- Design de Sobrancelhas" value="Design de Sobrancelhas" />
                    <Picker.Item label="- Depilação" value="Depilação" />
                    <Picker.Item label="- Maquiagem" value="Maquiagem" />
                    <Picker.Item label="- Manicure" value="Manicure" />
                </Picker>
        </InputArea>
    );
}