import { useUserContext } from "@/context/userContext";
import { defaultLink, Link } from "@/interface/link";
import React from "react";

const UseCustomize = () => {
  const user = useUserContext();

  const isEmptyList = () => {
    if (user.user && user.user.profile) {
      console.log(!(user.user.profile.links.length === 0));
      return user.user.profile.links.length === 0;
    }
  };

  const addLink = () => {
    if (!user.user) return;

    if (user.user.profile) {
      user.user.profile.links.push(defaultLink);
    } else {
      user.setUser({ ...user.user, profile: { links: [defaultLink] } });
    }
  };

  return {
    isEmptyList,
    addLink,
  };
};

export default UseCustomize;
