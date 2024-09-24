import styles from "./page.module.css";
import LoginForm from "./components/loginForm/LoginForm";

export default async function Home() {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
}
