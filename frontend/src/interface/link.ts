export interface ILink {
  id: string;
  type: number;
  url: string;
}

export const defaultLink: ILink = {
  id: "",
  type: 0,
  url: "",
};
