import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-community/async-storage";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import Api from "../Api";

import ExpandIcon from "../assets/expand.svg";
import { AntDesign } from "@expo/vector-icons";

const Modal = styled.Modal``;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const ModalBody = styled.View`
  background-color: #fa8072;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;

const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

const ModalItem = styled.View`
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`;

const ServiceInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const FinishButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #cd5c5c;
  height: 60px;
  margin: 2px 0px;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;

const FinishButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
`;

const DateItemWeekDay = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #e9967a;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 8px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #cd5c5c;
  margin-left: 10px;
`;

export default ({ show, setShow, user, service }) => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date(Date.now()));
  const [newDate, setNewDate] = useState("");
  const [mode, setMode] = useState("date");
  const [showCalendar, setShowCalendar] = useState(false);
  const [observation, setObservation] = useState("");

  {
    /**fecha o modal */
  }
  const handleCloseButton = () => {
    setShow(false);
  };

  {
    /**finaliza agendamento */
  }
  const handleFinishClick = async () => {
    const client_id = await AsyncStorage.getItem("id");
    {
      let res = await Api.setAppointment(
        client_id, // id do usuário logado
        service, // id do servico
        newDate,
        observation
      );
      if (res.Message) {
        alert(res.Message);
      } else {
        alert("Agendado com sucesso");
        setShow(false);
        navigation.navigate("Appointments");
      }
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS === "ios");
    var formattedDate = format(currentDate, "dd/MM/yyyy H:mm", {
      locale: ptBR,
    });
    setDate(currentDate);
    setNewDate(formattedDate);
  };

  const showMode = (currentMode) => {
    setShowCalendar(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
    // alert(date)
  };

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={handleCloseButton}>
            <ExpandIcon width="40" height="40" fill="#000000" />
          </CloseButton>

          <ModalItem>
            <ServiceInfo>
              <DateItemWeekDay>
                {!newDate ? (
                  <ServiceName>Escolha a hora e data</ServiceName>
                ) : (
                  <ServiceName>{newDate} hrs</ServiceName>
                )}
              </DateItemWeekDay>
            </ServiceInfo>
          </ModalItem>

          <FinishButton onPress={showDatepicker}>
            <AntDesign name="calendar" size={24} color="white" />
            <FinishButtonText>Escolher dia</FinishButtonText>
            <AntDesign name="right" size={24} color="white" />
          </FinishButton>
          <FinishButton onPress={showTimepicker}>
            <AntDesign name="clockcircleo" size={24} color="white" />
            <FinishButtonText>Escolher hora</FinishButtonText>
            <AntDesign name="right" size={24} color="white" />
          </FinishButton>
          <InputArea>
            <Input
              placeholder={"Tem alguma observação?"}
              placeholderTextColor="#cd5c5c"
              value={observation}
              onChangeText={(t) => setObservation(t)}
            />
          </InputArea>
          <FinishButton onPress={handleFinishClick}>
            <FinishButtonText>Finalizar agendamento</FinishButtonText>
          </FinishButton>
        </ModalBody>
      </ModalArea>
      {showCalendar && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </Modal>
  );
};
