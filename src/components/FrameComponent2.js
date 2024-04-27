import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ regNo, collegeRegNoPlaceholder }) => {
  return (
    <div className={styles.regNoParent}>
      <div className={styles.regNo}>{regNo}</div>
      <div className={styles.usernameAndEmailContainer}>
        <input
          className={styles.collegeRegNo}
          placeholder={collegeRegNoPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
