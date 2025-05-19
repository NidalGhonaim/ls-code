import styles from "./curtain-loading.module.scss";
import IconLoading from "./icon-loading";

const CurtainLoading = () => {
  return (
    <div className={styles.container}>
      <IconLoading />
    </div>
  );
};

export default CurtainLoading;
