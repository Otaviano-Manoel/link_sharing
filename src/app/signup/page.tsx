import EmailInput from "@/components/form/emailInput";
import PasswordInput from "@/components/form/passwordInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";
import RepeatPassword from "@/components/form/repeatPassword";

const SignUp = () => {
  return (
    <div className={styles.page}>
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
