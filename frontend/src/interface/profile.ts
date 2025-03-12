import { Link } from "./link";

export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  links: Link[];
}
