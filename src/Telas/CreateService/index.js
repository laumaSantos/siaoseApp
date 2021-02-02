import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import Slider from "@react-native-community/slider";

import {
  Container,
  HeaderTitle,
  SliderArea,
  CustomText,
  InputArea,
  CustomButton,
  CustomButtonText,
  BackButton,
} from "./styles";
import Api from "../../Api";

import Input from "../../Componentes/Input";

import DollarIcon from "../../assets/dollar.svg";
import HomeIcon from "../../assets/home.svg";
import DescriptionIcon from "../../assets/file.svg";
import TitleIcon from "../../assets/title.svg";
import BackIcon from '../../assets/back.svg';


export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    name: route.params.name,
    profession: route.params.profession,
  });

  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [locationField, setLocationField] = useState("");
  const [valueField, setValueField] = useState("");
  const [stars, setStars] = useState(0);

  const handleCreateService = async () => {
    if (
      nameField != "" &&
      descriptionField != "" &&
      locationField != "" &&
      valueField != ""
    ) {
      let res = await Api.createService(
        userInfo.id,
        nameField,
        descriptionField,
        locationField,
        valueField,
        stars
      );

      alert("Cadastrado com sucesso");
      navigation.navigate("Profile");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fa8072" />
      </BackButton>
      <InputArea>
        {userInfo.profession === "none" ? (
          <Text>atualize seu perfil com sua categoria de serviços</Text>
        ) : (
          <>
            <HeaderTitle>Sua categoria atual é {userInfo.profession}.</HeaderTitle>
            <Input
              IconSvg={TitleIcon}
              placeholder={"Insira o nome do seu serviço"}
              value={nameField}
              onChangeText={(t) => setNameField(t)}
            />
            <Input
              IconSvg={DescriptionIcon}
              placeholder={"Breve descrição do serviço"}
              value={descriptionField}
              onChangeText={(t) => setDescriptionField(t)}
            />

            <Input
              IconSvg={HomeIcon}
              placeholder={"Onde o serviço é realizado?"}
              value={locationField}
              onChangeText={(t) => setLocationField(t)}
            />

            <Input
              IconSvg={DollarIcon}
              placeholder={"Valor fixo ou a combinar"}
              value={valueField}
              onChangeText={(t) => setValueField(t)}
            />
            <Text>Você considera seu serviço com nota? Seja sincero(a)! Autoavaliação mal feita, pode ser o fim do seu negócio!</Text>
            <SliderArea>
              <Slider
                style={{ width: 200 }}
                minimumValue={0}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#268596"
                maximumTrackTintColor="#fa8072"
                value={stars}
                onValueChange={(t) => setStars(t)}
              />
              <CustomText> 5/{stars}</CustomText>
            </SliderArea>
          </>
        )}

        <CustomButton onPress={handleCreateService}>
          <CustomButtonText>Cadastrar serviço</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
