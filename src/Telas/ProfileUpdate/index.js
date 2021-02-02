import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import {
  Container,
  ContainerHeader,
  UserAvatar,
  LabelText,
  InputArea,
  CustomButton,
  CustomButtonText,
  BackButton,
} from "./styles";
import Api from "../../Api";

import Input from "../../Componentes/Input";
import SignPicker from "../../Componentes/SignPicker";

import PersonIcon from "../../assets/person.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import ProfissionalIcon from "../../assets/039-make-up.svg";
import BackIcon from "../../assets/back.svg";

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    email: route.params.email,
    password: route.params.password,
  });

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [image, setImage] = useState(null);
  const [serviceField, setServiceField] = useState("");
  const [imageField, setImageField] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setImageField(result);
      console.log(result.base64);
    }
  };

  const handleUpdadeClick = async () => {
    if (nameField === "") {
      setNameField(userInfo.name);
    }
    if (emailField === "") {
      setEmailField(userInfo.email);
    }
    if (passwordField === "") {
      setPasswordField(userInfo.password);
    }

    let res = await Api.updateUser(
      userInfo.id,
      nameField,
      emailField,
      passwordField,
      imageField,
      serviceField
    );

    alert("Atualizado com sucesso");
    navigation.navigate("Profile");
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fa8072" />
      </BackButton>
      <ContainerHeader>
        {image ? (
          <UserAvatar source={{ uri: image }} />
        ) : (
          <UserAvatar source={{ uri: userInfo.avatar }} />
        )}

        <CustomButton onPress={pickImage}>
          <CustomButtonText>Atualizar sua foto</CustomButtonText>
        </CustomButton>
      </ContainerHeader>
      <InputArea>
        {/* <LabelText> Nome: {userInfo.name}</LabelText> */}
        <Input
          IconSvg={PersonIcon}
          placeholder={"Insira o nome, caso deseje alterar."}
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />
        {/* <LabelText> Email: {userInfo.email}</LabelText> */}
        <Input
          IconSvg={EmailIcon}
          placeholder={"Insira o seu novo email"}
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        {/* <LabelText>Senha: {userInfo.password}</LabelText> */}
        <Input
          IconSvg={LockIcon}
          placeholder={"Insira sua nova senha"}
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />
        <LabelText> Escolha a categoria que você trabalha: </LabelText>
        <SignPicker
          IconSvg={ProfissionalIcon}
          value={serviceField}
          onChangeText={(t) => setServiceField(t)}
        />
        <CustomButton onPress={handleUpdadeClick}>
          <CustomButtonText>Atualizar dados</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
