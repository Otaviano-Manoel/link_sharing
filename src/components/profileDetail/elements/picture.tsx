import React from "react";
import styles from "./picture.module.scss";
import Image from "next/image";

const Picture = () => {
  return (
    <div className={styles.picture}>
      <input className={styles.find} type="file" name="find" id="find" />
      <p className={styles.profile}>Profile picture</p>
      <label className={styles.image} htmlFor="find">
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
      </label>
      <p className={styles.info}>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default Picture;
