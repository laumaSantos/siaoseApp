import React from "react";
import styled from "styled-components/native";

import HomeIcon from "../assets/home.svg";
import AppointmentIcon from "../assets/appointment.svg";
import ProfileIcon from "../assets/profile.svg";

const TabArea = styled.View`
  height: 60px;
  background-color: #cd5c5c;
  flex-direction: row;
  justify-content: space-around;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 35px;
  border: 3px solid #cd5c5c;
  margin-top: -20px;
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Home")}>
        <HomeIcon width="32" height="32" fill="#FFFFFF" />
      </TabItem>

      <TabItemCenter onPress={() => goTo("Appointments")}>
        <AppointmentIcon width="32" height="32" fill="#cd5c5c" />
      </TabItemCenter>

      <TabItem onPress={() => goTo("Profile")}>
        <ProfileIcon width="32" height="32" fill="#FFFFFF" />
      </TabItem>
    </TabArea>
  );
};
