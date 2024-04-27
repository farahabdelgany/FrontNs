import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GroupComponent2.module.css";

const GroupComponent2 = () => {
  const navigate = useNavigate();

  const onButtonLoginClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.email} />
      <div className={styles.frameParent}>
        <div className={styles.shelfParent}>
          <div className={styles.shelf}>Shelf</div>
          <div className={styles.smartWrapper}>
            <div className={styles.smart}>Smart</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.verificationWrapper}>
            <div className={styles.verification}>Verification</div>
          </div>
          <div className={styles.thankYou}>Thank you</div>
        </div>
        <div className={styles.youAreVerified}>You are Verified</div>
      </div>
      <div className={styles.vectorWrapper}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
      <button className={styles.buttonLogin} onClick={onButtonLoginClick}>
        <div className={styles.login}>Login</div>
      </button>
    </div>
  );
};

export default GroupComponent2;
