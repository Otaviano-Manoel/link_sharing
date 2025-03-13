import { Profile } from "./profile";

export interface User {
  email: string;
  logged: boolean;
  profile?: Profile;
}

export const defaultUser: User = {
  email: "",
  logged: false,
};
