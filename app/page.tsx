// import ScienceFair from "@/components/science-fair";
import styles from "./page.module.scss";
import Curtain from "@/components/curtain";

export default function Home() {
  return (
    <div className={styles.container}>
      <Curtain />
      <div className={styles.main}>
        {/* <h1 className={styles.heading}>
          <span>No Secrets</span>
          <br />
          Just Science
        </h1>
        <ScienceFair /> */}
      </div>
    </div>
  );
}
