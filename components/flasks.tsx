"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./flasks.module.scss";
import { useGSAP } from "@gsap/react";
import { ReactNode } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
