import GroupComponent from "../components/GroupComponent";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.christinHumeHcfwew744z4Unsp} />
      <main className={styles.parentRegisterForm}>
        <div className={styles.wrapperRegNoContainer}>
          <img className={styles.regNoContainer} alt="" src="/vector-1.svg" />
        </div>
        <img
          className={styles.collegeDetailsContainer}
          alt=""
          src="/college-details-container.svg"
        />
      </main>
      <GroupComponent />
    </div>
  );
};

export default Register;
