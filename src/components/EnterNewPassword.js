import styles from "./EnterNewPassword.module.css";

const EnterNewPassword = () => {
  return (
    <div className={styles.enterNewPassword}>
      <div className={styles.enterNewPasswordChild} />
      <div className={styles.enterNewPasswordItem} />
      <div className={styles.background} />
      <div className={styles.rectangleParent}>
        <img className={styles.rectangleIcon} alt="" />
        <img className={styles.batteryIcon} alt="" src="/battery1.svg" />
        <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
        <img
          className={styles.cellularConnectionIcon}
          alt=""
          src="/cellular-connection1.svg"
        />
        <div className={styles.timeStyle}>
          <div className={styles.div}>9:41</div>
        </div>
      </div>
      <div className={styles.setNewPassword}>Set New Password</div>
      <div className={styles.enterNewPassword1}>Enter New Password</div>
      <div className={styles.setComplexPasswords}>
        Set Complex passwords to protect
      </div>
      <div className={styles.enterNewPasswordInner} />
      <div className={styles.needHelp}>Need Help | FAQ | Terms Of use</div>
      <img
        className={styles.myPasswordPana1}
        alt=""
        src="/my-passwordpana-1@2x.png"
      />
      <img className={styles.groupIcon} alt="" src="/group-162336@2x.png" />
      <img
        className={styles.enterNewPasswordChild1}
        alt=""
        src="/group-162337@2x.png"
      />
      <div className={styles.password}>Password</div>
      <div className={styles.reTypePassword}>Re Type Password</div>
      <div className={styles.enterYourPassword}>Enter your password</div>
      <div className={styles.enterYourPassword1}>Enter your password</div>
      <img
        className={styles.vuesaxoutlineeyeSlashIcon}
        alt=""
        src="/vuesaxoutlineeyeslash.svg"
      />
      <img
        className={styles.vuesaxoutlineeyeSlashIcon1}
        alt=""
        src="/vuesaxoutlineeyeslash1.svg"
      />
    </div>
  );
};

export default EnterNewPassword;
