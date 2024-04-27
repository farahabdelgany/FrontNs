import styles from "./TopMain1.module.css";

const TopMain = () => {
  return (
    <div className={styles.topMain}>
      <div className={styles.inputField}>
        <div className={styles.quickSearchBar}>
          <div className={styles.quickSearchBarChild} />
          <div className={styles.button}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.all}>All</div>
              <div className={styles.image}>
                <img
                  className={styles.imageChild}
                  alt=""
                  src="/code-testing.svg"
                />
              </div>
            </div>
            <div className={styles.panel}>
              <div className={styles.search}>Search</div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.frameParent}>
              <div className={styles.searchWrapper}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                />
              </div>
              <div className={styles.shape} />
              <div className={styles.path}>
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
          <div className={styles.triangle}>
            <img className={styles.circleIcon} alt="" src="/code-testing.svg" />
          </div>
        </button>
        <div className={styles.oval}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.timeParent}>
              <img
                className={styles.timeIcon}
                loading="lazy"
                alt=""
                src="/time1.svg"
              />
              <div className={styles.hrs}>09:00 hrs</div>
            </div>
            <div className={styles.table}>
              <img
                className={styles.cellIcon}
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
              <div className={styles.mar2023}>4-Mar-2023</div>
            </div>
          </div>
        </div>
        <div className={styles.profileAccount}>
          <div className={styles.profileAccountChild} />
          <div className={styles.imageGallery}>
            <img
              className={styles.carouselIcon}
              loading="lazy"
              alt=""
              src="/ellipse-10@2x.png"
            />
          </div>
          <div className={styles.modal}>
            <div className={styles.kenson}>Kenson</div>
          </div>
          <div className={styles.slider}>
            <img
              className={styles.toggleIcon}
              loading="lazy"
              alt=""
              src="/code-testing.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMain;
