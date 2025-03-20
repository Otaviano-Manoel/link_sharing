import React from "react";
import styles from "./mobile.module.scss";
import { useUserContext } from "@/context/userContext";
import { styledMaskImage } from "@/constant/dynamicStyleMaskImage";
import Image from "next/image";
import { listIconSocial } from "@/constant/listIconSocial";

const MobileView = () => {
  const user = useUserContext();
  const list = listIconSocial;

  const getIcon = (type: number) => {
    return list[type];
  };

  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        {user.user?.profile && (
          <div className={styles.inf}>
            <div className={styles.circle}></div>
            <h3 className={styles.h3}>
              {user.user.profile.firstName} {user.user.profile.lastName}
            </h3>
            <p className={styles.p}>{user.user.profile.email}</p>
            <ul className={styles.ul}>
              {user.user.profile.links.map((link, i) => (
                <li key={i}>
                  <button
                    style={{ backgroundColor: getIcon(link.type).color }}
                    className={styles.item}
                  >
                    {getIcon(link.type).alternativeIcon ? (
                      <Image
                        className={styles.iconItem}
                        src={getIcon(link.type).alternativeIcon!}
                        alt=""
                        height={16}
                        width={16}
                      />
                    ) : (
                      <div
                        style={styledMaskImage(getIcon(link.type).icon)}
                        className={styles.iconItem}
                      />
                    )}
                    <p
                      className={styles.pItem}
                      style={{ color: link.type === 1 ? "black" : "white" }}
                    >
                      {getIcon(link.type).name}
                    </p>
                    <div
                      className={styles.arrowItem}
                      style={{
                        ...styledMaskImage("/icon-arrow-right.svg"),
                        backgroundColor: link.type === 1 ? "#737373" : "white",
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/*
         */}
      </div>
    </div>
  );
};

export default MobileView;
