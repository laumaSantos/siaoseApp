import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Api from '../Api';

const Modal = styled.Modal``;

const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;

const ModalBody = styled.View`
    background-color:  #fa8072;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 250px;
    padding: 10px 20px 40px 20px;
`;

const ModalTitle = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    margin-bottom:10px;
`;

const FinishButton = styled.TouchableOpacity`
    background-color: #cd5c5c;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 5px;
`;

const FinishButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 17px;
    font-weight: bold;
`;

export default ({ show, setShow, user, service }) => {
    const navigation = useNavigation();

    {/**fecha o modal */ }
    const handleCloseButton = () => {
        setShow(false);
    }

    {/**finaliza agendamento */ }
    const handleDeleteButton = async () => {
        {
            let res = await Api.deleteService(
                user, // id do usuário
                service, //id do serviço
            );

            alert(res);
            setShow(false);
            navigation.navigate('MyServices');
        }
    }

return (
    <Modal
        transparent={true}
        visible={show}
        animationType="slide"
    >
        <ModalArea>
            <ModalBody>
                <ModalTitle>Deseja excluir esse serviço?</ModalTitle>
                <FinishButton onPress={handleCloseButton} >
                    <FinishButtonText>Não</FinishButtonText>
                </FinishButton>
                <FinishButton onPress={handleDeleteButton}>
                    <FinishButtonText>Sim, Excluir!</FinishButtonText>
                </FinishButton>
            </ModalBody>
        </ModalArea>
    </Modal>
);
}