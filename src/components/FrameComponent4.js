import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onProfileAccountContainerClick = useCallback(() => {
    navigate("/homeprofile");
  }, [navigate]);

  return (
    <header className={styles.quickSearchBarParent}>
      <div className={styles.quickSearchBar}>
        <div className={styles.quickSearchBarChild} />
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.all}>All</div>
            <div className={styles.polygonWrapper}>
              <img
                className={styles.frameItem}
                alt=""
                src="/code-testing.svg"
              />
            </div>
          </div>
          <div className={styles.searchWrapper}>
            <h3 className={styles.search}>Search</h3>
          </div>
        </div>
        <div className={styles.quickSearchBarInner}>
          <div className={styles.frameGroup}>
            <div className={styles.searchContainer}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
            </div>
            <div className={styles.frameInner} />
            <div className={styles.barcodeScannerWrapper}>
              <img
                className={styles.barcodeScannerIcon}
                loading="lazy"
                alt=""
                src="/barcode-scanner.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.lang}>
        <div className={styles.langChild} />
        <div className={styles.translateWrapper}>
          <img className={styles.translateIcon} alt="" src="/translate.svg" />
        </div>
        <div className={styles.langWrapper}>
          <div className={styles.lang1}>Lang</div>
        </div>
        <div className={styles.langInner}>
          <img className={styles.polygonIcon} alt="" src="/code-testing.svg" />
        </div>
      </button>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.timeParent}>
          <img className={styles.timeIcon} alt="" src="/time.svg" />
          <div className={styles.am}>09:00 AM</div>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/import-export-manager.svg"
          />
          <div className={styles.mar2023}>4-Mar-2023</div>
        </div>
      </div>
      <div
        className={styles.profileAccount}
        onClick={onProfileAccountContainerClick}
      >
        <div className={styles.profileAccountChild} />
        <div className={styles.profileAccountInner}>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-10@2x.png" />
        </div>
        <div className={styles.kensonWrapper}>
          <div className={styles.kenson}>Kenson</div>
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.frameChild1} alt="" src="/code-testing.svg" />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
