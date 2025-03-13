import api from "./api";

export const requestGetProfile = async (user: { email: string }) => {
  return await api.post("/getProfile", { user });
};
