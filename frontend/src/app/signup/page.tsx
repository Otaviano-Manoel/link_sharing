"use client";
import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import PasswordInput from "@/components/auth/passwordInput";
import EmailInput from "@/components/auth/emailInput";
import RepeatPassword from "./components/repeatPassword";
import UseSignUp from "./hooks/useSignUp";

const SignUpPage = () => {
  const signup = UseSignUp();

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

        <form onSubmit={signup.handleSubmit} className={styles.form}>
          <EmailInput
            value={signup.email.email}
            setValue={signup.email.setEmail}
            valid={signup.email.valid}
            updateStateValid={signup.email.updateStateValid}
          />
          <PasswordInput
            placeholder="At least 8 characters"
            value={signup.password.password}
            setValue={signup.password.setPassword}
            valid={signup.password.valid}
            updateStateValid={signup.password.updateStateValid}
          />
          <RepeatPassword
            password={signup.password.password}
            value={signup.repeatPassword.repeatPassword}
            setValue={signup.repeatPassword.setRepeatPassword}
            valid={signup.repeatPassword.valid}
            updateStateValid={signup.repeatPassword.updateStateValid}
          />

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

export default SignUpPage;
