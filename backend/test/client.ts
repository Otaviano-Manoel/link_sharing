import axios, { AxiosError } from "axios";

const apiUrl = "http://localhost:3001";
const user = {
  email: "otaviano@exemplo.com",
  password: "senha123",
  profile: {
    email: "ota@exe.com",
    firstName: "otaviano",
    lastName: "souza",
    image: "image.jpg",
    links: [{ type: 10, url: "linkedin" }],
  },
};

const createUser = async () => {
  try {
    const response = await axios.post(`${apiUrl}/signup`, { user });
    console.log("Usuário criado:", response.data);
  } catch (error) {
    const err = error as any;
    console.error("Erro ao criar usuário:", err.response?.data || err.message);
  }
};

const profile = async () => {
  try {
    const response = await axios.post(`${apiUrl}/profile`, { user });
    console.log("Profile:", response.data);
  } catch (error) {
    const err = error as any;
    console.error("Erro no profile:", err.response?.data || err.message);
  }
};

const testApi = async () => {
  console.log("Client running...");
  //await createUser();
  await profile();
};

testApi();
