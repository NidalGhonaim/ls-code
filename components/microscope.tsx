"use client";

import Image from "next/image";
import styles from "./microscope.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type MicroscopeProps = {
  title: string;
  content: ReactNode;
};

const Microscope = ({ title, content }: MicroscopeProps) => {
  const image = useRef<HTMLImageElement>(null);
  const heading = useRef<HTMLImageElement>(null);
  const microscope = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: image.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    timeline.to(image.current, {
      borderRadius: "1000",
      scaleY: 0.04,
      scaleX: 0.04,
      opacity: 0,
      ease: "none",
    });

    timeline.to(
      heading.current,
      {
        scaleY: 5,
        scaleX: 5,
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
        pinSpacing: false,
        once: false,
        start: "top top",
        end: "bottom top",
        // markers: true,
      });
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.animation}>
        <div className={styles.pinned}>
          <Image
            ref={microscope}
            className={`${styles.image} ${styles.microscope}`}
            src="/images/microscope.png"
            alt="microscope"
            width={1450}
            height={1450}
          />
        </div>
        <div className={styles.pinned}>
          <Image
            ref={image}
            className={styles.image}
            src="/images/liquid-background.png"
            alt="artistic microscopic view of pesticides"
            width={1920}
            height={1080}
          />
        </div>
        <div className={styles.pinned}>
          <h1 ref={heading} className={styles.title}>
            {title}
          </h1>
        </div>
      </div>
      <div className={styles.body}>
        <h1>{title}</h1>
        {content}
      </div>
    </div>
  );
};

export default Microscope;
