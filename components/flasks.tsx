"use client";

import styles from "./flasks.module.scss";
import { ReactNode } from "react";

type FlasksProps = {
  title: string;
  content: ReactNode;
};

const Flasks = ({ title, content }: FlasksProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.animation}>
        <video
          className={styles.flasks}
          src="/videos/flasks.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div className={styles.body}>
        <h2>{title}</h2>
        {content}
      </div>
    </div>
  );
};

export default Flasks;
