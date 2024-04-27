import SendVerificationCode from "../components/SendVerificationCode";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  return (
    <div className={styles.resetPassword1}>
      <div className={styles.loginParent}>
        <img className={styles.loginIcon} alt="" src="/login.svg" />
        <div className={styles.resetYourPassword}>
          <SendVerificationCode />
          <div className={styles.rectangleParent}>
            <img className={styles.rectangleIcon} alt="" />
            <img className={styles.batteryIcon} alt="" src="/battery.svg" />
            <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection.svg"
            />
            <div className={styles.timeStyle}>
              <div className={styles.div}>9:41</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
