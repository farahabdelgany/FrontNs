import styles from "./FooterSection.module.css";

const FooterSection = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
          </div>
          <div className={styles.hardCopy}>Hard Copy</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.vectorContainer}>
            <img className={styles.vectorIcon1} alt="" src="/vector-12.svg" />
          </div>
          <div className={styles.eBook}>E - Book</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.vectorFrame}>
            <img className={styles.vectorIcon2} alt="" src="/vector-12.svg" />
          </div>
          <div className={styles.audioBook}>Audio book</div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
