import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StackLayout.module.css";

const StackLayout = () => {
  const navigate = useNavigate();

  const onSearchMenuContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onMyShelfMenuClick = useCallback(() => {
    navigate("/my-shelf");
  }, [navigate]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    navigate("/transcation-history");
  }, [navigate]);

  return (
    <div className={styles.stackLayout}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector.svg" />
      <div className={styles.sideBar}>
        <div className={styles.sideMenu}>
          <div className={styles.sideMenu1}>
            <div className={styles.homeMenu}>
              <img
                className={styles.heroiconsMinihome}
                loading="lazy"
                alt=""
                src="/heroiconsminihome.svg"
              />
              <h1 className={styles.home}>Home</h1>
            </div>
            <div
              className={styles.searchMenu}
              onClick={onSearchMenuContainerClick}
            >
              <img className={styles.searchIcon} alt="" src="/search-1.svg" />
              <h1 className={styles.search}>Search</h1>
            </div>
            <div className={styles.myShelfMenu} onClick={onMyShelfMenuClick}>
              <img
                className={styles.bookshelfIcon}
                loading="lazy"
                alt=""
                src="/bookshelf.svg"
              />
              <h1 className={styles.myShelf}>My Shelf</h1>
            </div>
            <div
              className={styles.favouriteMenu}
              onClick={onFavouriteMenuContainerClick}
            >
              <img
                className={styles.giveGiftIcon}
                alt=""
                src="/give-gift.svg"
              />
              <div className={styles.contribute}>Contribute</div>
            </div>
          </div>
        </div>
        <div className={styles.modal}>
          <div className={styles.toolTip}>
            <h3 className={styles.about}>{`About `}</h3>
            <h3 className={styles.support}>Support</h3>
            <h3 className={styles.termsCondition}>{`Terms & Condition`}</h3>
          </div>
        </div>
      </div>
      <h1 className={styles.shelf}>Shelf</h1>
      <h1 className={styles.smart}>Smart</h1>
    </div>
  );
};

export default StackLayout;
