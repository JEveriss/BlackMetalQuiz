import styles from "./page.module.css";

import Card from "./components/card";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>QUIZ</h1>
        <Card x={0} />

      </main>
    </div>
  );
}
