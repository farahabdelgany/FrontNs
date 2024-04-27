import { useCallback } from "react";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent11";
import { useNavigate } from "react-router-dom";
import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  const navigate = useNavigate();

  const onButtonLoginClick = useCallback(() => {
    navigate("/verification-code");
  }, [navigate]);

  return (
    <form className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.registrationWrapper}>
            <div className={styles.registration}>Registration</div>
          </div>
          <div
            className={styles.forBothStaff}
          >{`For Both Staff & Students`}</div>
        </div>
      </div>
      <FrameComponent2
        regNo="Reg No."
        collegeRegNoPlaceholder="College Reg. No."
      />
      <FrameComponent2
        regNo="College Email ID"
        collegeRegNoPlaceholder="username@collegename.ac.in"
      />
      <FrameComponent1 password="Password" />
      <FrameComponent1
        password="Confirm Password"
        propPadding="0px 0px var(--padding-lg)"
      />
      <div className={styles.buttonLoginWrapper}>
        <button className={styles.buttonLogin} onClick={onButtonLoginClick}>
          <div className={styles.register}>Register</div>
        </button>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.alreadyAUserLoginNowParent}>
          <div className={styles.alreadyAUserContainer}>
            {`Already a User? `}
            <span className={styles.loginNow}>Login now</span>
          </div>
          <div className={styles.useAsGuestWrapper}>
            <div className={styles.useAsGuest}>{`Use as Guest `}</div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default GroupComponent;
