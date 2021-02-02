import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RefreshControl } from "react-native";
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LoadingIcon,
  ListArea,
} from "./styles";

import MakeItem from "../../Componentes/MakeItem";

import SearchIcon from "../../assets/search.svg";

import Api from "../../Api";

export default () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const getUsers = async () => {
    {
      /*inicia carregamento*/
    }
    setLoading(true);
    {
      /*mostra a lista completa dos maquiadores*/
    }
    setList([]);
    let response = await Api.getUsers();
    // console.log(response)
    //console.log(response.data)
    {
      /**verifica se ocorreu algum erro */
    }
    if (response.data == "") {
      {
        /** se der tudo certo esta sera executada */
      }
      alert("Erro:");
      {
        /**se der algum erro esta sera executada */
      }
    } else {
      setList(response.data);
    }
    {
      /**executa após terminar o processo  */
    }
    setLoading(false);
  };

  useEffect(() => {
    {
      /**pega a lista de maquiadores */
    }
    getUsers();
  }, []);

  return (
    <Container 
    >
      <Scroller refreshControl={
      <RefreshControl refreshing={loading} onRefresh={getUsers} />
    }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o(a) profissional que você precisa!{" "}
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate("Search")}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Busque os(as) melhores profissionais"
            placeholderTextColor="#FFFFFF"
            onFocus={() => navigation.navigate("Search")}
          />
        </LocationArea>

        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          {list.map(
            (item, k) =>
              item.profession != "none" && <MakeItem key={k} data={item} />
          )}
        </ListArea>
      </Scroller>
    </Container>
  );
};
