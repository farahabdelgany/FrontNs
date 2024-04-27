import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const navigate = useNavigate();

  const onHomeMenuContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSearchMenuContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onMyShelfMenuClick = useCallback(() => {
    navigate("/my-shelf");
  }, [navigate]);

  return (
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
        <h2 className={styles.home}>Home</h2>
      </div>
      <div className={styles.searchMenuWrapper}>
        <div className={styles.searchMenu} onClick={onSearchMenuContainerClick}>
          <div className={styles.searchWrapper}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search1.svg"
            />
          </div>
          <h2 className={styles.search}>Search</h2>
        </div>
      </div>
      <div className={styles.myShelfMenuWrapper}>
        <div className={styles.myShelfMenu} onClick={onMyShelfMenuClick}>
          <div className={styles.bookshelfWrapper}>
            <img
              className={styles.bookshelfIcon}
              loading="lazy"
              alt=""
              src="/bookshelf.svg"
            />
          </div>
          <h2 className={styles.myShelf}>My Shelf</h2>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
