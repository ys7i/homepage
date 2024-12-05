import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <h1>Under maintenance</h1>
        </div>
        <p>See you soon</p>
      </main>
    </div>
  );
}
