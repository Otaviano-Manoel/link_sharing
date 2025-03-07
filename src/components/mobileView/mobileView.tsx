import Image from "next/image";
import React from "react";
import styles from "./mobileView.module.scss";

const MobileView = () => {
  return (
    <div className={styles.mobile}>
      <Image
        className={styles.img}
        src={"/illustration-phone-mockup.svg"}
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
};

export default MobileView;
