import React from 'react';
import styled from 'styled-components/native';

//corrigir o alinhamento do cabeçalho
export const Container = styled.View `
    background-color:#ffa07a;
    flex:1;
    justify-content:center;
    align-items: center;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;