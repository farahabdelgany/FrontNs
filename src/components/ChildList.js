import { useMemo } from "react";
import styles from "./ChildList.module.css";

const ChildList = ({
  depthTracker,
  dontMakeMeThink,
  steveKrug2000,
  dontMakeMeWidth,
  spanHeight,
  spanDisplay,
  propLineHeight,
  propHeight,
  propHeight1,
}) => {
  const childListStyle = useMemo(() => {
    return {
      width: dontMakeMeWidth,
    };
  }, [dontMakeMeWidth]);

  const dontMakeMeStyle = useMemo(() => {
    return {
      height: spanHeight,
      display: spanDisplay,
    };
  }, [spanHeight, spanDisplay]);

  const steveKrug2000Style = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      height: propHeight,
    };
  }, [propLineHeight, propHeight]);

  const loopCheckerStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className={styles.childList} style={childListStyle}>
      <div className={styles.siblingSet}>
        <img
          className={styles.depthTrackerIcon}
          loading="lazy"
          alt=""
          src={depthTracker}
        />
      </div>
      <div className={styles.edgeDetector}>
        <div className={styles.dontMakeMe} style={dontMakeMeStyle}>
          {dontMakeMeThink}
        </div>
        <div className={styles.steveKrug2000} style={steveKrug2000Style}>
          {steveKrug2000}
        </div>
        <div className={styles.loopChecker} style={loopCheckerStyle}>
          <span>4.5</span>
          <span className={styles.span}>/5</span>
        </div>
      </div>
    </div>
  );
};

export default ChildList;
