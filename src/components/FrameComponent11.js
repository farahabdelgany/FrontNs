import { useMemo } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent1 = ({ password, propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.passwordParent} style={frameDivStyle}>
      <div className={styles.password}>{password}</div>
      <div className={styles.frameParent}>
        <div className={styles.inputFieldsSetWrapper}>
          <div className={styles.inputFieldsSet}>
            <div className={styles.inputFieldsSetChild} />
            <div className={styles.inputFieldsSetItem} />
            <div className={styles.inputFieldsSetInner} />
            <div className={styles.ellipseDiv} />
            <div className={styles.inputFieldsSetChild1} />
            <div className={styles.inputFieldsSetChild2} />
            <div className={styles.inputFieldsSetChild3} />
            <div className={styles.inputFieldsSetChild4} />
          </div>
        </div>
        <img className={styles.eyeOff} alt="" src="/eye--off.svg" />
      </div>
    </div>
  );
};

export default FrameComponent1;
