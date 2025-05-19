"use client";

import CurtainLoading from "./curtain-loading";
import styles from "./curtain.module.scss";
import dynamic from "next/dynamic";

const CurtainCanvas = dynamic(() => import("@/components/curtain-canvas"), {
  ssr: false,
  loading: () => <CurtainLoading />,
});

const Curtain = () => {
  return (
    <div className={styles.container}>
      <CurtainCanvas />
    </div>
  );
};

export default Curtain;
