import axios from "axios";

const apiUrl = "http://localhost:3001";
const user = { email: "otaviano@exemplo.com", password: "senha123" };

export const createUser = async () => {
  try {
    const response = await axios.post(`${apiUrl}/signup`, { user });
    console.log("Usuário criado:", response.data);
  } catch (error) {
    const err = error as any;
    console.error("Erro ao criar usuário:", err.response?.data || err.message);
  }
};

export const deleteUser = async () => {
  try {
    const response = await axios.post(`${apiUrl}/delete`, { user });
    console.log("Usuário deletado:", response.data);
  } catch (error) {
    const err = error as any;
    console.error(
      "Erro ao deleta o usuário:",
      err.response?.data || err.message
    );
  }
};

export const authenticateUser = async () => {
  try {
    const response = await axios.post(`${apiUrl}/login`, { user });
    console.log("Usuários:", response.data);
  } catch (error) {
    const err = error as any;
    console.error(
      "Erro ao listar usuários:",
      err.response?.data || err.message
    );
  }
};
