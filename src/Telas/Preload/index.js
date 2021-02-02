import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

import MakeLogo from "../../assets/make.svg";

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const Load = async () => {
      const logged = await AsyncStorage.getItem("id");
      if (logged) {
        await setTimeout(() => navigation.navigate("MainTab"), 2000);
      } else {
        await setTimeout(() => navigation.navigate("SignIn"), 2000);
      }
    };
    Load();
  }, []);

  return (
    <Container>
      <MakeLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
