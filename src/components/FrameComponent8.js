import { useMemo } from "react";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({ borrowedTop, borrowedLeft }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: borrowedTop,
      left: borrowedLeft,
    };
  }, [borrowedTop, borrowedLeft]);

  return (
    <div className={styles.rectangleParent} style={frameDiv2Style}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/input-splitter@2x.png"
      />
      <div className={styles.dontMakeMe}>Don’t Make Me think</div>
      <div className={styles.steveKrug2000}>Steve Krug, 2000</div>
      <div className={styles.div}>
        <span>4.5</span>
        <span className={styles.span}>/5</span>
      </div>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.borrowed}>Borrowed</div>
      </button>
      <button className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <div className={styles.return}>Return</div>
      </button>
      <div className={styles.borrowedOn}>{`Borrowed on `}</div>
      <div className={styles.mar20230900}>2 Mar 2023 09:00 AM</div>
      <div className={styles.mar2023OverContainer}>
        <span>{`13 Mar 2023 `}</span>
        <span className={styles.overDue}>(Over Due)</span>
      </div>
      <div className={styles.submissionDue}>Submission Due</div>
      <div className={styles.ellipseDiv} />
    </div>
  );
};

export default FrameComponent8;
