import styles from "./GroupComponent1.module.css";

const GroupComponent1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.enterYourOtp}>Enter your OTP Here</div>
      <div className={styles.notYetReceivedResendParent}>
        <div className={styles.notYetReceivedContainer}>
          {`Not yet received? `}
          <span className={styles.resend}>Resend</span>
        </div>
        <div className={styles.back}>Back</div>
      </div>
      <button className={styles.buttonLogin}>
        <div className={styles.verify}>Verify</div>
      </button>
      <div className={styles.frameParent}>
        <div className={styles.verificationWrapper}>
          <div className={styles.verification}>Verification</div>
        </div>
        <div className={styles.checkYourEMail}>Check your E-mail for OTP</div>
      </div>
      <div className={styles.shelfLabelParent}>
        <div className={styles.shelfLabel} />
        <div className={styles.shelfLabel1} />
        <div className={styles.shelfLabel2} />
        <div className={styles.shelfLabel3} />
        <div className={styles.shelfLabel4} />
      </div>
      <div className={styles.shelfParent}>
        <h1 className={styles.shelf}>Shelf</h1>
        <div className={styles.smartWrapper}>
          <h1 className={styles.smart}>Smart</h1>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
