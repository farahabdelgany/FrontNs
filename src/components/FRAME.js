import styles from "./FRAME.module.css";

const FRAME = () => {
  return (
    <header className={styles.fRAME}>
      <div className={styles.fRAMEInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.all}>All</div>
              <div className={styles.polygonWrapper}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/polygon-1.svg"
                />
              </div>
            </div>
            <div className={styles.searchWrapper}>
              <div className={styles.search}>Search</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.searchContainer}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search2.svg"
                />
              </div>
              <div className={styles.homeMenu} />
              <div className={styles.barcodeScannerWrapper}>
                <img
                  className={styles.barcodeScannerIcon}
                  loading="lazy"
                  alt=""
                  src="/barcode-scanner1.svg"
                />
              </div>
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
        <div className={styles.homeMenuHeroiconminihomeWrapper}>
          <img
            className={styles.homeMenuHeroiconminihome}
            alt=""
            src="/code-testing.svg"
          />
        </div>
      </button>
      <div className={styles.recentTransactions}>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.menuTabAllAllRevenueReven}>
            <img
              className={styles.timeIcon}
              loading="lazy"
              alt=""
              src="/time1.svg"
            />
            <div className={styles.hrs}>09:00 hrs</div>
          </div>
          <div className={styles.menuTabAllAllRevenueReven1}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
            <div className={styles.mar2023}>4-Mar-2023</div>
          </div>
        </div>
      </div>
      <div className={styles.icon}>
        <div className={styles.profileAccount}>
          <div className={styles.profileAccountChild} />
          <div className={styles.price}>
            <img
              className={styles.addAccountsIcon}
              alt=""
              src="/ellipse-10@2x.png"
            />
          </div>
          <div className={styles.buttonBig}>
            <div className={styles.kenson}>Kenson</div>
          </div>
          <div className={styles.childrenInfo}>
            <img
              className={styles.childrenInfoChild}
              alt=""
              src="/code-testing.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FRAME;
