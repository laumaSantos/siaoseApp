import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Stars from "../../Componentes/Stars";
import BackIcon from "../../assets/back.svg";

import {
  Container,
  Scroller,
  PageBody,
  BackButton,
  LoadingIcon,
  NoServicesTitle,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChooseButton,
  ServiceChooseBtnText,
} from "./styles";

import Api from "../../Api";
import ModalOptions from "../../Componentes/ModalOptions";

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
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fa8072" />
      </BackButton>
      <Scroller>
        <PageBody>
          {loading ? (
            <LoadingIcon size="large" color="#000000" />
          ) : (
            <>
              {serviceInfo.length === 0 ? (
                <>
                  <NoServicesTitle>
                    Você ainda não publicou serviços! Comece agora mesmo!
                  </NoServicesTitle>
                  <ServiceChooseButton
                    onPress={() =>
                      navigation.navigate("CreateService", userInfo)
                    }
                  >
                    <ServiceChooseBtnText>Vamos lá!</ServiceChooseBtnText>
                  </ServiceChooseButton>
                </>
              ) : (
                <>
                  {serviceInfo && (
                    <>
                      <ServicesTitle>
                        Lista de Serviços publicados
                      </ServicesTitle>
                      {serviceInfo.map((item, key) => (
                        <ServiceItem key={key}>
                          <ServiceInfo>
                            <ServiceName>{item.name}</ServiceName>
                            <ServicePrice>{item.description}</ServicePrice>
                            <ServicePrice>Local: {item.location}</ServicePrice>
                            <ServicePrice>
                              Valor cobrado: R$ {item.value}
                            </ServicePrice>
                            <Stars stars={item.stars} showNumber={false} />
                          </ServiceInfo>
                          <ServiceChooseButton
                            onPress={() =>
                              navigation.navigate("UpdateService", item)
                            }
                          >
                            <ServiceChooseBtnText>Editar</ServiceChooseBtnText>
                          </ServiceChooseButton>
                          <ServiceChooseButton
                            onPress={() => handleServiceChoose(item.id)}
                          >
                            <ServiceChooseBtnText>Excluir</ServiceChooseBtnText>
                          </ServiceChooseButton>
                        </ServiceItem>
                      ))}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </PageBody>
      </Scroller>

      <ModalOptions
        show={showModal}
        setShow={setShowModal}
        user={userInfo.id}
        service={selectedService}
      />
    </Container>
  );
};
