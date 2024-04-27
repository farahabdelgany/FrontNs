import { useState, useCallback } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const [checkBoxDefaultChecked, setCheckBoxDefaultChecked] = useState(true);

  const onButtonLoginClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onNewUserRegisterClick = useCallback(() => {
    // Please sync "Register" to the project
  }, []);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.shelfParent}>
        <h1 className={styles.shelf}>Shelf</h1>
        <div className={styles.smartWrapper}>
          <h1 className={styles.smart}>Smart</h1>
        </div>
      </div>
      <form className={styles.frameParent}>
        <div className={styles.passwordInputWrapper}>
          <div className={styles.passwordInput}>
            <div className={styles.emailParent}>
              <div className={styles.email}>Email</div>
              <div className={styles.checkbox}>
                <input
                  className={styles.usernamecollegenameacin}
                  placeholder="username@collegename.ac.in"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.passwordParent}>
              <div className={styles.password}>Password</div>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.emailInputParent}>
                    <div className={styles.emailInput} />
                    <div className={styles.passwordInput1} />
                    <div className={styles.emailInput1} />
                    <div className={styles.emailInput2} />
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                    <div className={styles.ellipseDiv} />
                    <div className={styles.emailInput3} />
                  </div>
                </div>
                <img className={styles.eyeOff} alt="" src="/eye--off.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.extraParent}>
          <div className={styles.extra}>
            <div className={styles.customCheckbox}>
              <input
                className={styles.checkBoxDefault}
                checked={checkBoxDefaultChecked}
                type="checkbox"
                onChange={(event) =>
                  setCheckBoxDefaultChecked(event.target.checked)
                }
              />
              <div className={styles.rememberMe}>Remember me</div>
            </div>
            <div className={styles.forgotPassword}>Forgot password?</div>
          </div>
          <button className={styles.buttonLogin} onClick={onButtonLoginClick}>
            <div className={styles.login}>Login</div>
          </button>
        </div>
        <div className={styles.newUserRegisterHereParent}>
          <div
            className={styles.newUserRegisterContainer}
            onClick={onNewUserRegisterClick}
          >
            {`New User? `}
            <span className={styles.registerHere}>Register Here</span>
          </div>
          <div className={styles.emailInput4}>
            <div className={styles.useAsGuest}>{`Use as Guest `}</div>
          </div>
        </div>
      </form>
      <div className={styles.frameContainer}>
        <div className={styles.welcomeBackWrapper}>
          <div className={styles.welcomeBack}>Welcome Back !</div>
        </div>
        <div className={styles.signInTo}>
          Sign in to continue to yourDigital Library
        </div>
      </div>
      </div> 
  )
  
}
export default FrameComponent;