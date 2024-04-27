import styles from "./SendVerificationCode.module.css";

const SendVerificationCode = () => {
  return (
    <div className={styles.sendVerificationCode}>
      <div className={styles.sendVerificationCodeChild} />
      <div className={styles.sendVerificationCodeItem} />
      <div className={styles.wrapperGroup513789Wrapper}>
        <div className={styles.wrapperGroup513789}>
          <img
            className={styles.wrapperGroup513789Child}
            loading="lazy"
            alt=""
            src="/group-513789@2x.png"
          />
        </div>
      </div>
      <div className={styles.sendVerificationCodeInner}>
        <div className={styles.frameParent}>
          <div className={styles.resetYourPasswordWrapper}>
            <h2 className={styles.resetYourPassword}>Reset Your Password</h2>
          </div>
          <div className={styles.enterYourEmailContainer}>
            <p
              className={styles.enterYourEmail}
            >{`Enter your email adress below `}</p>
            <p className={styles.andWellSend}>
              and we’ll send you a link with instructions
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.emailAddressParent}>
        <div className={styles.emailAddress}>Email Address</div>
        <div className={styles.sendVerificationCodeButton}>
          <div className={styles.backgroundParent}>
            <div className={styles.background} />
            <div className={styles.shapeWrapper}>
              <img className={styles.shapeIcon} alt="" src="/shape.svg" />
            </div>
            <div className={styles.enterEmailAddress}>Enter Email Address</div>
          </div>
          <button className={styles.backgroundGroup}>
            <div className={styles.background1} />
            <div className={styles.sendVerificationCode1}>
              Send Verification Code
            </div>
          </button>
        </div>
        <div className={styles.needHelpFaqTermsOfUseWrapper}>
          <div className={styles.needHelp}>Need Help | FAQ | Terms Of use</div>
        </div>
      </div>
    </div>
  );
};

export default SendVerificationCode;
