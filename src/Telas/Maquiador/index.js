import React, { useState, useEffect } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import Swiper from "react-native-swiper";

import Stars from "../../Componentes/Stars";
import MakeModal from "../../Componentes/MakeModal";

import BackIcon from "../../assets/back.svg";
import backmake01 from "../../assets/background/make1.jpg";
import backmake02 from "../../assets/background/make2.jpg";
import backmake03 from "../../assets/background/make3.jpg";

import {
  Container,
  Scroller,
  PageBody,
  BackButton,
  LoadingIcon,
  SwipeDot,
  SwipeDotActive,
  SwipeItem,
  SwipeImage,
  UserInfoArea,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserInfoCategoria,
  NoServicesTitle,
  ServiceArea,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChooseButton,
  ServiceChooseBtnText,
} from "./styles";

import Api from "../../Api";

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    profession: route.params.profession,
  });
  const [serviceInfo, setServiceInfo] = useState([]);

  {
    /**loader */
  }
  const [loading, setLoading] = useState(false);

  {
    /**vai ficar selecionado com o serviço armazenado */
  }
  const [selectedService, setSelectedService] = useState(null);

  {
    /**vai controlar a exibição do modal */
  }
  const [showModal, setShowModal] = useState(false);

  {
    /** Assim que entrar na tela esta função ira carregar estas informações para serem executada */
  }
  useEffect(() => {
    {
      /** esta funçao basicamente pega as informações do usuário */
    }
    const getUserServices = async () => {
      setLoading(true);
      {
        /** requisição  para a api para pegar informações do maquiador */
      }
      let json = await Api.getUserServices(userInfo.id);
      console.log(userInfo.id);
      setServiceInfo(json.data);

      setLoading(false);
    };
    getUserServices();
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };

  {
    /**função que seleciona serviços, pegar as informações deles e abrir o modal  */
  }
  const handleServiceChoose = (service_id) => {
    setSelectedService(service_id);
    setShowModal(true);
  };
  return (
    <Container>
      <Scroller>
        <Swiper
          style={{ height: 200 }}
          dot={<SwipeDot />}
          activeDot={<SwipeDotActive />}
          paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
          autoplay={true}
        >
          <SwipeItem>
            <SwipeImage source={backmake01} resizeMode="cover" />
          </SwipeItem>
          <SwipeItem>
            <SwipeImage source={backmake02} resizeMode="cover" />
          </SwipeItem>
          <SwipeItem>
            <SwipeImage source={backmake03} resizeMode="cover" />
          </SwipeItem>
        </Swiper>

        <PageBody>
          <UserInfoArea>
            {userInfo.avatar === "avatar.png" ? (
              <UserAvatar
                source={{
                  uri: "http://192.168.0.104:3333/files/" + userInfo.avatar,
                }}
              />
            ) : (
              <UserAvatar source={{ uri: userInfo.avatar }} />
            )}
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <UserInfoName>
                Categoria:{" "}
                <UserInfoCategoria>{userInfo.profession}</UserInfoCategoria>{" "}
              </UserInfoName>
            </UserInfo>
          </UserInfoArea>
          {loading ? (
            <LoadingIcon size="large" color="#000000" />
          ) : (
            <>
              {serviceInfo.length === 0 ? (
                <NoServicesTitle>
                  Esse usuário(a) ainda não publicou serviços!
                </NoServicesTitle>
              ) : (
                <>
                  {serviceInfo && (
                    <ServiceArea>
                      <ServicesTitle>Lista de Serviços</ServicesTitle>
                      {serviceInfo.map((item, key) => (
                        <ServiceItem key={key}>
                          <ServiceInfo>
                            <ServiceName>{item.name}</ServiceName>
                            <ServicePrice>{item.description}</ServicePrice>
                            <Stars stars={item.stars} showNumber={true} />
                            <ServicePrice>R$ {item.value}</ServicePrice>
                          </ServiceInfo>
                          <ServiceChooseButton
                            onPress={() => handleServiceChoose(item.id)}
                          >
                            <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                          </ServiceChooseButton>
                        </ServiceItem>
                      ))}
                    </ServiceArea>
                  )}
                </>
              )}
            </>
          )}
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#FFFFFF" />
      </BackButton>
      <MakeModal
        show={showModal}
        setShow={setShowModal}
        user={userInfo}
        service={selectedService}
      />
    </Container>
  );
};
