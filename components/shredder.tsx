"use client";

import Image from "next/image";
import styles from "./shredder.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ShredderProps = {
  title: string;
  content: ReactNode;
};

const Shredder = ({ title, content }: ShredderProps) => {
  // const image = useRef<HTMLImageElement>(null);
  const patent = useRef<HTMLImageElement>(null);
  const heading = useRef<HTMLImageElement>(null);
  const expired = useRef<HTMLImageElement>(null);
  // TODO: replace line refs with a class + gsap array
  const line1 = useRef<HTMLImageElement>(null);
  const line2 = useRef<HTMLImageElement>(null);
  const line3 = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: patent.current,
        start: "top top",
        end: "+=220% top",
        scrub: true,
        // markers: true,
      },
    });

    timeline.to(expired.current, {
      scale: 1,
      opacity: 1,
      ease: "none",
    });

    timeline.to(patent.current, {
      scaleY: 0.35,
      ease: "none",
    });

    timeline.to(
      expired.current,
      {
        y: "50%",
        opacity: 0,
        ease: "none",
      },
      "<"
    );

    timeline.to(
      heading.current,
      {
        y: "400%",
        color: "#d6e0ea",
        ease: "none",
      },
      "<"
    );

    timeline.to(
      line1.current,
      {
        y: "1200%",
        opacity: 0,
        ease: "none",
      },
      "<"
    );

    timeline.to(
      line2.current,
      {
        y: "1200%",
        opacity: 0,
        ease: "none",
      },
      "<"
    );

    timeline.to(
      line3.current,
      {
        y: "1200%",
        opacity: 0,
        ease: "none",
      },
      "<"
    );

    const pinnedElements = gsap.utils.toArray(`.${styles.pinned}`);

    pinnedElements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element as string,
        pin: true,
        // markers: true,
      });
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.pinned}>
        <div className={styles.animation}>
          <div ref={patent} className={styles.patent} />
          <p ref={heading} className={styles.title}>
            Patent
          </p>
          <div ref={line1} className={`${styles.line} ${styles.line1}`} />
          <div ref={line2} className={`${styles.line} ${styles.line2}`} />
          <div ref={line3} className={`${styles.line} ${styles.line3}`} />
          <p className={styles.label}>COST SHREDDER</p>
          <Image
            ref={expired}
            className={styles.expired}
            src="/images/expired.png"
            alt="microscope"
            width={600}
            height={360}
          />
          <Image
            className={styles.shredder}
            src="/images/shredder_02.png"
            alt="microscope"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <div className={styles.body}>
        <h2>{title}</h2>
        {content}
      </div>
    </div>
  );
};

export default Shredder;
