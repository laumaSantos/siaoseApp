import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { RefreshControl } from "react-native";
import { Container, Scroller, ListArea, EmptyWarning } from "./styles";

import AppointmentItem from "../../Componentes/AppointmentItem";
import Api from "../../Api";

export default () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = async () => {
    setLoading(true);
    setList([]);
    const client_id = await AsyncStorage.getItem("id");
    let res = await Api.getAppointments(client_id);
    // alert(res.message)
    if (!res.message) {
      setList(res);
    }

    setLoading(false);
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getAppointments} />
        }
      >
        {!loading && list.length === 0 && (
          <EmptyWarning>Não há agendamentos.</EmptyWarning>
        )}

        <ListArea>
          {list.map((item, k) => (
            <AppointmentItem key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
