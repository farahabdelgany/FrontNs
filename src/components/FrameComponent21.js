import styles from "./FrameComponent21.module.css";

const FrameComponent2 = ({
  rectangle12,
  theDesignOfEvery,
  donNorman1988,
  prop,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src={rectangle12} />
      <div className={styles.frameParent}>
        <div className={styles.theDesignOfEveryParent}>
          <div className={styles.theDesignOf}>{theDesignOfEvery}</div>
          <div className={styles.donNorman1988}>{donNorman1988}</div>
        </div>
        <div className={styles.div}>
          <span>{prop}</span>
          <span className={styles.span}>/5</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
