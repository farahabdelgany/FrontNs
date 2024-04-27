import { useMemo } from "react";
import styles from "./SideBarFrame.module.css";

const SideBarFrame = ({
  bookshelf,
  giveGift,
  propColor,
  propColor1,
  sideBarFrameTop,
  sideBarFrameLeft,
  sideBarFrameMargin,
  sideBarFrameBottom,
  onHomeMenuContainerClick,
  onSearchMenuContainerClick,
  onMyShelfMenuClick,
  onFavouriteMenuContainerClick,
}) => {
  const myShelfStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const contributeStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const sideBarFrameStyle = useMemo(() => {
    return {
      top: sideBarFrameTop,
      left: sideBarFrameLeft,
      margin: sideBarFrameMargin,
      bottom: sideBarFrameBottom,
    };
  }, [
    sideBarFrameTop,
    sideBarFrameLeft,
    sideBarFrameMargin,
    sideBarFrameBottom,
  ]);

  return (
    <div className={styles.sideBarFrame} style={sideBarFrameStyle}>
      <div className={styles.sideBar}>
        <div className={styles.homeMenu} onClick={onHomeMenuContainerClick}>
          <div className={styles.heroiconsMinihomeWrapper}>
            <img
              className={styles.heroiconsMinihome}
              loading="lazy"
              alt=""
              src="/heroiconsminihome1.svg"
            />
          </div>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.sideBarInner}>
          <div className={styles.searchMenuParent}>
            <div
              className={styles.searchMenu}
              onClick={onSearchMenuContainerClick}
            >
              <div className={styles.searchWrapper}>
                <img className={styles.searchIcon} alt="" src="/search-1.svg" />
              </div>
              <div className={styles.search}>Search</div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent} onClick={onMyShelfMenuClick}>
                <div className={styles.bookshelfWrapper}>
                  <img
                    className={styles.bookshelfIcon}
                    loading="lazy"
                    alt=""
                    src={bookshelf}
                  />
                </div>
                <div className={styles.myShelf} style={myShelfStyle}>
                  My Shelf
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sideBarChild}>
          <div className={styles.aboutParent}>
            <div className={styles.about}>{`About `}</div>
            <div className={styles.support}>Support</div>
            <div className={styles.termsCondition}>{`Terms & Condition`}</div>
          </div>
        </div>
      </div>
      <div
        className={styles.favouriteMenu}
        onClick={onFavouriteMenuContainerClick}
      >
        <img className={styles.giveGiftIcon} alt="" src={giveGift} />
        <div className={styles.contribute} style={contributeStyle}>
          Contribute
        </div>
      </div>
    </div>
  );
};

export default SideBarFrame;
