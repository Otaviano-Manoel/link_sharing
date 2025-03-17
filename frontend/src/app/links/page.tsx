"use client";
import React, { useEffect } from "react";
import styles from "./page.module.scss";
import Nav from "@/components/nav/nav";
import MobileView from "@/components/mobileView/mobileView";
import CustomizeLinks from "@/app/links/components/customizeLinks";
import { useUserContext } from "@/context/userContext";
import { requestGetProfile } from "@/services/profileService";

const Page = () => {
  const user = useUserContext();

  useEffect(() => {
    if (user.user && !user.user.profile) {
      requestGetProfile({ email: user.user.email })
        .then((response) => {
          const profile = response.data.profile;

          if (profile) {
            user.setProfile({ ...profile, links: profile.links });
          } else {
            user.setProfile({ links: [] });
          }
        })
        .catch((error) => {
          console.error("Error trying to get the profile: ", error);
        });
    }
  }, [user]);

  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <MobileView />
        <CustomizeLinks />
      </main>
    </div>
  );
};

export default Page;
