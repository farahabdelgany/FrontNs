import styles from "./Welcome.module.css"; // Import CSS module

const Welcome = () => {
  return (
    <div className={styles["shelf-smart"]}> {/* Use className and access styles */}
      <div className={styles["shelf-smart-text"]}> {/* Use className and access styles */}
        Shelf <span>Smart</span>
      </div>
    </div>
  );
};

export default Welcome;
