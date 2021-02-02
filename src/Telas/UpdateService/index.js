import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  CustomText,
  InputArea,
  CustomButton,
  CustomButtonText,
  LabelText,
  BackButton,
} from "./styles";
import Api from "../../Api";

import Input from "../../Componentes/Input";

import DollarIcon from "../../assets/dollar.svg";
import HomeIcon from "../../assets/home.svg";
import DescriptionIcon from "../../assets/file.svg";
import TitleIcon from "../../assets/title.svg";
import StarIcon from "../../assets/star_empty.svg";
import BackIcon from "../../assets/back.svg";

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [serviceInfo, setServiceInfo] = useState({
    id: route.params.id,
    name: route.params.name,
    location: route.params.location,
    description: route.params.description,
    value: route.params.value,
    stars: route.params.stars,
    user_id: route.params.user_id,
  });

  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [locationField, setLocationField] = useState("");
  const [valueField, setValueField] = useState("");
  const [stars, setStars] = useState("");

  const handleUpdateService = async () => {
    let res = await Api.updateService(
      serviceInfo.id,
      serviceInfo.user_id,
      nameField,
      descriptionField,
      locationField,
      valueField,
      stars
    );

    if (res.error) {
      alert(res.error);
    } else {
      alert(res.message);
    }

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
      <InputArea>
        <CustomText>Atualize os dados do seu serviço</CustomText>
        <>
          <LabelText> Titulo: {serviceInfo.name}</LabelText>
          <Input
            IconSvg={TitleIcon}
            placeholder={"Insira o nome do seu serviço"}
            value={nameField}
            onChangeText={(t) => setNameField(t)}
          />
          <LabelText> Descrição: {serviceInfo.description}</LabelText>
          <Input
            IconSvg={DescriptionIcon}
            placeholder={"Breve descrição do serviço"}
            value={descriptionField}
            onChangeText={(t) => setDescriptionField(t)}
          />
          <LabelText> Local: {serviceInfo.location}</LabelText>
          <Input
            IconSvg={HomeIcon}
            placeholder={"Onde o serviço é realizado?"}
            value={locationField}
            onChangeText={(t) => setLocationField(t)}
          />
          <LabelText> Valor: {serviceInfo.value}</LabelText>
          <Input
            IconSvg={DollarIcon}
            placeholder={"Valor fixo ou a combinar"}
            value={valueField}
            onChangeText={(t) => setValueField(t)}
          />
          <LabelText> Auto-avaliação: {serviceInfo.stars}</LabelText>
          <Input
            IconSvg={StarIcon}
            placeholder={"Qualidade do seu serviço de 0 a 5"}
            keyboardType={"numeric"}
            value={stars}
            onChangeText={(t) => setStars(t)}
          />
        </>

        <CustomButton onPress={handleUpdateService}>
          <CustomButtonText>Atualizar serviço</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
