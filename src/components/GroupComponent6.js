import { useMemo } from "react";
import styles from "./GroupComponent6.module.css";

const GroupComponent = ({
  fullName,
  reinhardKenson,
  propMinWidth,
  propMinWidth1,
}) => {
  const fullNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const reinhardKensonStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.sequenceParent}>
      <input className={styles.sequence} type="text" />
      <div className={styles.fullName} style={fullNameStyle}>
        {fullName}
      </div>
      <div className={styles.reinhardKensonWrapper}>
        <div className={styles.reinhardKenson} style={reinhardKensonStyle}>
          {reinhardKenson}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
