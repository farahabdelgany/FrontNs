import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent311.module.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  return (
    <header className={styles.frameParent}>
      <div className={styles.quickSearchBarParent}>
        <div className={styles.quickSearchBar}>
          <div className={styles.quickSearchBarChild} />
          <div className={styles.frameGroup}>
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
              <div className={styles.search}>Search</div>
            </div>
          </div>
          <div className={styles.quickSearchBarInner}>
            <div className={styles.frameContainer}>
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
            <img
              className={styles.polygonIcon}
              alt=""
              src="/code-testing.svg"
            />
          </div>
        </button>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.timeParent}>
              <img
                className={styles.timeIcon}
                loading="lazy"
                alt=""
                src="/time1.svg"
              />
              <div className={styles.hrs}>09:00 hrs</div>
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              <div className={styles.mar2023}>4-Mar-2023</div>
            </div>
          </div>
        </div>
        <div className={styles.profileAccount}>
          <div className={styles.profileAccountChild} />
          <div className={styles.profileAccountInner}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-10@2x.png"
            />
          </div>
          <div className={styles.kensonWrapper}>
            <div className={styles.kenson}>Kenson</div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameChild1}
              alt=""
              src="/code-testing.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div
          className={styles.rectangleContainer}
          onClick={onGroupContainerClick}
        >
          <div className={styles.frameChild2} />
          <div className={styles.browse}>Browse</div>
          <div className={styles.polygonContainer}>
            <img
              className={styles.frameChild3}
              alt=""
              src="/code-testing.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
