import { useUserContext } from "@/context/userContext";
import { defaultLink } from "@/interface/link";

const UseCustomizeLinks = () => {
  const user = useUserContext();

  const isListEmpty = () => user.user?.profile?.links.length === 0;

  function generateId(): string {
    return Math.random().toString(36).substring(2, 8);
  }

  const addLink = () => {
    if (!user.user || !user.user.profile) return;
    let id = generateId();
    const links = user.user.profile.links;

    while (links.find((x) => x.id === id)) {
      id = generateId();
    }

    links.push({ ...defaultLink, id: id });
    user.setProfile({ links: links });
  };

  return { isListEmpty, addLink };
};

export default UseCustomizeLinks;
