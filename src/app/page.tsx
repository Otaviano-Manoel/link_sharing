import styles from "./page.module.scss";
import Login from "@/components/auth/login";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <Login />
    </div>
  );
}
