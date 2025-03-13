import { useUserContext } from "@/context/userContext";
import { Link } from "@/interface/link";
import React from "react";

const UseListLinks = () => {
  const user = useUserContext();

  const getLinks = (): Link[] => {
    if (!user.user || !user.user.profile) return [];
    else {
      return user.user.profile.links;
    }
  };

  return { getLinks };
};

export default UseListLinks;
