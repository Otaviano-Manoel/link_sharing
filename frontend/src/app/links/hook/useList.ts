import { useUserContext } from "@/context/userContext";
import { ILink } from "@/interface/link";
import { useEffect, useState } from "react";

const UseList = () => {
  const user = useUserContext();
  const [links, setLinks] = useState(user.user?.profile?.links || []);

  useEffect(() => {
    user.setProfile({ links });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [links]);

  useEffect(() => {
    console.log(user.user);
  }, [user]);

  const handleChangeStateLinks = (index: number, link: ILink) => {
    const newLinks = [...links];
    newLinks[index] = link;
    setLinks(newLinks);
  };

  const removeItem = (index: number) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  return { links, handleChangeStateLinks, removeItem };
};

export default UseList;
