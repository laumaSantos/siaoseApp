import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

export const BASE_API = axios.create({
  // baseURL: "http://192.168.0.104:3333", // porta onde o servidor está rodando
  baseURL: "https://siaose-backend.herokuapp.com/",
});

//requisições
export default {
  //Realiza o login na aplicação
  signIn: async (email, password) => {
    const req = await BASE_API.post("/auth", {
      email: email,
      password: password,
    });
    console.log(req.data);
    if (!req.data.error) return req.data;

    return req.data;
  },

  signUp: async (cpf, name, email, password, profession, image) => {
    var data = new FormData();
    data.append("cpf", cpf);
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("profession", profession);
    data.append("avatar", image.uri);

    const req = await BASE_API.post("/users", data);
    if (req.data.error) return req.data;

    console.log(req.data);
    return req.data;
  },

  // Busca todos os usuários
  getUsers: async () => {
    const user = await BASE_API.get("/users");
    return user;
  },
  // Busca os serviços de um usuário
  getUserServices: async (id) => {
    const service = await BASE_API.get("/userServices", {
      headers: {
        user_id: id,
      },
    });
    return service;
  },

  getSpecifyService: async (id) => {
    const service = await BASE_API.get(`/specifyService/${id}`);
    console.log(service.data);
    return service.data[0];
  },

  setAppointment: async (userId, serviceId, selectedDate, observation) => {
    const agenda = await BASE_API.post(
      "/agenda",
      {
        data: selectedDate,
        observation: observation,
      },
      {
        headers: {
          user_id: userId,
          service_id: serviceId,
        },
      }
    );
    console.log(agenda.data);

    if (agenda.data.message) return agenda.data;

    return agenda.data;
  },

  // REALIZA A BUSCA NA API PELO NOME DIGITADO
  search: async (userName) => {
    const users = await BASE_API.get("/userServiceSearch", {
      headers: {
        name: userName,
      },
    });
    return users;
  },

  createService: async (userId, name, description, location, value, stars) => {
    const service = await BASE_API.post(
      "services",
      {
        name,
        description,
        location,
        value,
        stars,
      },
      {
        headers: {
          user_id: userId,
        },
      }
    );

    return service;
  },

  updateService: async (
    serviceId,
    userId,
    name,
    description,
    location,
    value,
    stars
  ) => {
    const req = await BASE_API.put(
      `/services/${serviceId}`,
      {
        name,
        description,
        location,
        value,
        stars,
      },
      {
        headers: {
          user_id: userId,
        },
      }
    );

    return req.data;
  },

  deleteService: async (userId, serviceId) => {
    const req = await BASE_API.delete(`/services/${serviceId}`, {
      headers: {
        user_id: userId,
      },
    });
    const { message } = req.data;
    return message;
  },

  getAppointments: async (user_id) => {
    const req = await BASE_API.get(`/userAgenda/${user_id}`);
    const data = req.data;
    return data;
  },

  getUser: async (id) => {
    const req = await BASE_API.get(`/users/${id}`);
    const data = req.data[0];
    return data;
  },

  updateUser: async (id, name, email, password, image, service) => {
    var data = new FormData();
    data.append("avatar", image.uri);
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("profession", service);

    const req = await BASE_API.put(`/users/${id}`, data);
    return req.data;
  },

  deleteUser: async (id) => {
    const req = await BASE_API.delete("/users/", {
      params: {
        id: id,
      },
    });
    const { Message } = req.data;
    return Message;
  },
};
