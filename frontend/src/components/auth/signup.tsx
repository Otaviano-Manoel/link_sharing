import Image from "next/image";
import React from "react";
import EmailInput from "./form/emailInput";
import PasswordInput from "./form/passwordInput";
import RepeatPassword from "./form/repeatPassword";
import Link from "next/link";
import styles from "./auth.module.scss";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src={"/logo-devlinks-large.svg"}
        alt={""}
        width={50}
        height={50}
      />

      <div className={styles.containerForm}>
        <header className={styles.header}>
          <h1 className={styles.title}>Create account</h1>
          <p className={styles.p}>Let’s get you started sharing your links!</p>
        </header>

        <form action="" className={styles.form}>
          <EmailInput />
          <PasswordInput placeholder="At least 8 characters" />
          <RepeatPassword />

          <p className={styles.message}>
            Password must contain at least 8 characters
          </p>

          <button className={styles.submit} type="submit">
            Create new account
          </button>

          <p className={styles.p}>
            Already have an account?
            <Link className={styles.link} href={"/"}>
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
