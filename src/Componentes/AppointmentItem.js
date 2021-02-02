import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import Api from "../Api";

const Area = styled.View`
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
`;
const UserArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin-right: 20px;
`;

const InformationUserArea = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
`;
const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;
const SplitArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const ServiceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  max-width: 250px;
`;

const LocationText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  max-width: 110px;
`;

const DateText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #4eadbe;
`;

export default ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getService();
  }, []);

  const getService = async () => {
    setLoading(true);
    setService([]);
    const service_id = data.service_id;
    let service = await Api.getSpecifyService(service_id);
    if (!service.message) {
      setService(service);
    }
    let professionalId = service.user_id;
    const user = await Api.getUser(professionalId);
    if (!user.message) {
      setUserInfo(user);
    }

    setLoading(false);
  };

  return (
    <Area>
      <UserArea>
        <Avatar source={{uri: userInfo.avatar}}/>

        <InformationUserArea>
          <SplitArea>
            <Text>Prestador(a): </Text>
            <UserName>{userInfo.name}</UserName>
          </SplitArea>
          <Text>Serviço: </Text>
          <UserName>{service.name}</UserName>
        </InformationUserArea>
      </UserArea>

      <SplitArea>
        <InformationUserArea>
          <Text>Descrição do serviço:</Text>
          <ServiceText>{service.description}</ServiceText>
        </InformationUserArea>
        <InformationUserArea>
          <Text>Local:</Text>
          <LocationText>{service.location}</LocationText>
        </InformationUserArea>
      </SplitArea>
      <InformationUserArea>
        <Text>Sua observação:</Text>
        <ServiceText>{data.observation}</ServiceText>
      </InformationUserArea>

      <SplitArea>
        <DateText>{data.data} Horas</DateText>
        <DateText>R$ {service.value}</DateText>
      </SplitArea>
    </Area>
  );
};
