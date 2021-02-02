{
  /**tela com exibição dos serviços */
}
import React from "react";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";

const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const SeeProfileButton = styled.View`
  width: 150px;
  height: 26px;
  border: 1px solid #4eadbe;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default ({ data }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("Maquiador", {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      email: data.email,
      profession: data.profession,
    });
  };

  return (
    <Area onPress={handleClick}>
      <Avatar source={{ uri: data.avatar }} />

      <InfoArea>
        <UserName>{data.name}</UserName>
        <Row>
          <SeeProfileButtonText>Categoria: </SeeProfileButtonText>
          <UserName>{data.profession}</UserName>
        </Row>

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
