import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { AntDesign, FontAwesome5, Feather, Entypo } from "@expo/vector-icons";

import {
  Container,
  Button,
  BtnText,
  UserInfoArea,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserInfoLabel,
  LogoutBtn,
  LogoutBtnText,
  DicasTitle,
  DicasArea,
  DicasBody,
  DicasInfo,
  DicasItem,
  DicasName,
} from "./styles";
import NavPrevIcon from "../../assets/nav_prev.svg";
import NavNextIcon from "../../assets/nav_next.svg";
import AsyncStorage from "@react-native-community/async-storage";

import Api from "../../Api";
import dicas from "../../utils/dicas";

export default () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    setLoading(true);
    console.log("buscando id");
    const id = await AsyncStorage.getItem("id");
    console.log(id);
    const user = await Api.getUser(id);
    // console.log(user)
    setUserInfo(user);
    setLoading(false);
  };

  {
    /**Ação executada quando for clicado em sair/logout */
  }
  const handleLogoutClick = async () => {
    await AsyncStorage.removeItem("id");
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };
  const handleDelete = async () => {
    const id = await AsyncStorage.getItem("id");
    await Api.deleteUser(id);
    await AsyncStorage.removeItem("id");
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getInfo} />
      }
    >
      <UserInfoArea>
        <UserAvatar source={{ uri: userInfo.avatar }} />
        <UserInfo>
          <UserInfoLabel>Nome</UserInfoLabel>
          <UserInfoName>{userInfo.name}</UserInfoName>
          <UserInfoLabel>Contato</UserInfoLabel>
          <UserInfoName>{userInfo.email}</UserInfoName>
          <UserInfoLabel>Categoria</UserInfoLabel>
          {userInfo.profession === "none" ? (
            <UserInfoName>Não profissional</UserInfoName>
          ) : (
            <UserInfoName>{userInfo.profession}</UserInfoName>
          )}
        </UserInfo>
      </UserInfoArea>
      <Button onPress={() => navigation.navigate("ProfileUpdate", userInfo)}>
        <Feather name="edit" size={24} color="#268596" />
        <BtnText>Atualizar perfil</BtnText>
        <AntDesign name="right" size={24} color="#268596" />
      </Button>
      {userInfo.profession != "none" && (
        <>
          <Button onPress={() => navigation.navigate("MyServices", userInfo)}>
            <FontAwesome5 name="user" size={24} color="#268596" />
            <BtnText>Meus Serviços</BtnText>
            <AntDesign name="right" size={24} color="#268596" />
          </Button>
          <Button
            onPress={() => navigation.navigate("CreateService", userInfo)}
          >
            <AntDesign name="pluscircleo" size={24} color="#268596" />
            <BtnText>Novo serviço</BtnText>
            <AntDesign name="right" size={24} color="#268596" />
          </Button>
        </>
      )}

      <DicasArea>
        <DicasTitle>
          Dicas{` `}
          <Entypo name="new" size={26} color="#268596" />
        </DicasTitle>
        <Swiper
          style={{ height: 110 }}
          showsPagination={false}
          showsButtons={true}
          autoplay={true}
          prevButton={<NavPrevIcon width="35" height="35" fill="#000000" />}
          nextButton={<NavNextIcon width="35" height="35" fill="#000000" />}
        >
          {dicas.map((item, key) => (
            <DicasItem key={key}>
              <DicasInfo>
                <DicasName>{item.title}</DicasName>
              </DicasInfo>
              <DicasBody>{item.body}</DicasBody>
            </DicasItem>
          ))}
        </Swiper>
      </DicasArea>

      <LogoutBtn onPress={handleLogoutClick}>
        <AntDesign name="logout" size={24} color="#fff" />
        <LogoutBtnText>Sair</LogoutBtnText>
        <AntDesign name="right" size={24} color="#fff" />
      </LogoutBtn>
      <LogoutBtn onPress={handleDelete}>
        <Feather name="trash" size={24} color="#fff" />
        <LogoutBtnText>Excluir conta</LogoutBtnText>
        <AntDesign name="right" size={24} color="#fff" />
      </LogoutBtn>
    </Container>
  );
};
