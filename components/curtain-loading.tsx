import styles from "./curtain-loading.module.scss";
import IconLoading from "./icon-loading";

const CurtainLoading = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Pulling back the curtains <IconLoading />
      </p>
    </div>
  );
};

export default CurtainLoading;
