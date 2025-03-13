import api from "./api";

export const requestSignUp = async (user: {
  email: string;
  password: string;
}) => {
  return await api.post("/signup", { user });
};

export const requestLogin = async (user: {
  email: string;
  password: string;
}) => {
  return await api.post("/login", { user });
};
