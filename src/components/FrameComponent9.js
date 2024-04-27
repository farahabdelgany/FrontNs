import { useMemo } from "react";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({
  password,
  text,
  icondown,
  password1,
  textPlaceholder,
  iconcalendar,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propMinWidth2,
  propWidth,
}) => {
  const passwordStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const textStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const password1Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const text1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.textfield4Parent}>
      <div className={styles.textfield4}>
        <div className={styles.password} style={passwordStyle}>
          {password}
        </div>
        <div className={styles.textParent}>
          <div className={styles.text} style={textStyle}>
            {text}
          </div>
          <div className={styles.icondownWrapper}>
            <img className={styles.icondown} alt="" src={icondown} />
          </div>
        </div>
      </div>
      <div className={styles.textfield5}>
        <div className={styles.password1} style={password1Style}>
          {password1}
        </div>
        <div className={styles.textGroup}>
          <input
            className={styles.text1}
            placeholder={textPlaceholder}
            type="text"
            style={text1Style}
          />
          <div className={styles.iconcalendarWrapper}>
            <img className={styles.iconcalendar} alt="" src={iconcalendar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
