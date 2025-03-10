import React from "react";
import styles from "./picture.module.scss";
import Image from "next/image";

const Picture = () => {
  return (
    <div className={styles.picture}>
      <p className={styles.profile}>Profile picture</p>
      <div className={styles.image}>
        {true ? (
          <>
            <Image
              className={styles.icon}
              src={"/icon-upload-image.svg"}
              alt=""
              height={50}
              width={50}
            />
            <p className={styles.upload}>+ Upload Image</p>
          </>
        ) : (
          <Image
            className={styles.imageUser}
            src={"/logo-devlinks-small.svg"}
            alt=""
            height={100}
            width={100}
          />
        )}
      </div>
      <p className={styles.info}>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default Picture;
