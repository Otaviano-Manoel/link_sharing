import React from "react";
import styles from "./mobile.module.scss";
import { useUserContext } from "@/context/userContext";
import { styledMaskImage } from "@/constant/dynamicStyleMaskImage";
import Image from "next/image";

const MobileView = () => {
  const user = useUserContext();

  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        {user.user?.profile && (
          <div className={styles.inf}>
            <div className={styles.circle}></div>
            <h3 className={styles.h3}>Ben Wright</h3>
            <p className={styles.p}>otavianomanoelvasconcelos@gmail.com</p>
            <ul className={styles.ul}>
              <li>
                <button
                  style={{ backgroundColor: "black" }}
                  className={styles.item}
                >
                  <div
                    style={styledMaskImage("/icon-linkedin.svg")}
                    className={styles.icon}
                  />
                  <p className={styles.p}>GitHub</p>
                  <Image
                    className={styles.arrow}
                    src={"/icon-arrow-right.svg"}
                    alt=""
                    height={50}
                    width={50}
                  />
                </button>
              </li>
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
