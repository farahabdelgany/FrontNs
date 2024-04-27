import styles from "./SideBar1.module.css";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarInner}>
        <div className={styles.frameParent}>
          <div className={styles.heroiconsMinihomeWrapper}>
            <img
              className={styles.heroiconsMinihome}
              loading="lazy"
              alt=""
              src="/heroiconsminihome.svg"
            />
          </div>
          <h3 className={styles.home}>Home</h3>
        </div>
      </div>
      <div className={styles.sideBarChild}>
        <div className={styles.frameGroup}>
          <div className={styles.bookshelfWrapper}>
            <img
              className={styles.bookshelfIcon}
              loading="lazy"
              alt=""
              src="/bookshelf.svg"
            />
          </div>
          <h3 className={styles.dashboard}>Dashboard</h3>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameDiv}>
            <div className={styles.searchWrapper}>
              <img className={styles.searchIcon} alt="" src="/search-1.svg" />
            </div>
            <h3 className={styles.search}>Search</h3>
          </div>
        </div>
        <div className={styles.navigationSidebarItemLi}>
          <div className={styles.products}>
            <div className={styles.hideBgHideBgCopyMask}>
              <div className={styles.mask} />
              <div className={styles.hideBg} />
              <div className={styles.hideBgCopy} />
            </div>
            <h3 className={styles.h3}></h3>
            <div className={styles.productsWrapper}>
              <div className={styles.products1}>Dashboard</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sideBarInner1}>
        <div className={styles.aboutParent}>
          <div className={styles.about}>{`About `}</div>
          <div className={styles.support}>Support</div>
          <div className={styles.termsCondition}>{`Terms & Condition`}</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
