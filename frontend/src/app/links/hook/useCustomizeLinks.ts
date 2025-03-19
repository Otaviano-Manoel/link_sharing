import { useUserContext } from "@/context/userContext";
import { defaultLink } from "@/interface/link";

const UseCustomizeLinks = () => {
  const user = useUserContext();

  const isListEmpty = () => user.user?.profile?.links.length === 0;

  const addLink = () => {
    if (!user.user || !user.user.profile) return;

    const links = user.user.profile.links;
    links.push(defaultLink);
    user.setProfile({ links: links });
    console.log("add");
  };

  return { isListEmpty, addLink };
};

export default UseCustomizeLinks;
