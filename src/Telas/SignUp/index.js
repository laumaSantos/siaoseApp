import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import * as ImagePicker from "expo-image-picker";

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  UserAvatarButton,
  UserAvatar,
  ContainerHeader,
} from "./styles";
import Api from "../../Api";

import Input from "../../Componentes/Input";

import MakeLogo from "../../assets/make.svg";
import PersonIcon from "../../assets/person.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import SignPicker from "../../Componentes/SignPicker";
import ProfissionalIcon from "../../assets/039-make-up.svg";

export default () => {
  const navigation = useNavigation();

  const [cpfField, setCpfField] = useState("");
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [serviceField, setServiceField] = useState("");
  const [imageField, setImageField] = useState("");
  const [image, setImage] = useState(null);

  const handleSignupClick = async () => {
    if (
      cpfField != "" &&
      nameField != "" &&
      emailField != "" &&
      passwordField != "" &&
      serviceField != ""
    ) {
      let res = await Api.signUp(
        cpfField,
        nameField,
        emailField,
        passwordField,
        serviceField,
        imageField
      );
      // console.log(res.error)
      if (!res.error) {
        console.log(res);
        const id = await AsyncStorage.setItem("id", res.toString());
        console.log(id);
        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        alert("Erro: " + res.error);
      }
    } else {
      alert("Preencha todos os campos!");
    }
  };

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

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <Container>
      <ContainerHeader>
        <MakeLogo width="100px" height="100px" />
        <UserAvatarButton onPress={pickImage}>
          {image ? (
            <UserAvatar source={{ uri: image }} />
          ) : (
            <SignMessageButtonText>
              Toque para escolher sua foto
            </SignMessageButtonText>
          )}
        </UserAvatarButton>
      </ContainerHeader>
      <SignMessageButton onPress={pickImage}></SignMessageButton>
      <InputArea>
        <Input
          IconSvg={PersonIcon}
          keyboardType="numeric"
          placeholder="Digite seu CPF"
          value={cpfField}
          onChangeText={(t) => setCpfField(t)}
        />

        <Input
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

        <Input
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />

        <Input
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <SignPicker
          IconSvg={ProfissionalIcon}
          value={serviceField}
          onChangeText={(t) => setServiceField(t)}
        />

        <CustomButton onPress={handleSignupClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
