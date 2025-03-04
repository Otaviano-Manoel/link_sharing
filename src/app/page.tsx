import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import EmailInput from "@/components/form/emailInput";
import PasswordInput from "@/components/form/passwordInput";

export default function Home() {
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
          <h1 className={styles.title}>Login</h1>
          <p className={styles.p}>
            Add your details below to get back into the app
          </p>
        </header>

        <form action="" className={styles.form}>
          <EmailInput />
          <PasswordInput />

          <button className={styles.submit} type="submit">
            Login
          </button>

          <p className={styles.p}>
            Don’t have an account?
            <Link className={styles.link} href={""}>
              {" "}
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
