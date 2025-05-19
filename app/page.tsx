import styles from "./page.module.scss";
import Curtain from "@/components/curtain";

export default function Home() {
  return (
    <div className={styles.container}>
      <Curtain />
      <h1 className={styles.heading}>
        <span>No Secrets</span>
        <br />
        Just Science
      </h1>
    </div>
  );
}
