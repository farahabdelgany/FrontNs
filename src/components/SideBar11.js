import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideBar11.module.css";

const SideBar1 = () => {
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
        <div className={styles.stepper}>
          <img
            className={styles.heroiconsMinihome}
            loading="lazy"
            alt=""
            src="/heroiconsminihome1.svg"
          />
        </div>
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.toolbar}>
          <div
            className={styles.searchMenu}
            onClick={onSearchMenuContainerClick}
          >
            <div className={styles.dataAggregator}>
              <img
                className={styles.searchIcon}
                loading="lazy"
                alt=""
                src="/search-1.svg"
              />
            </div>
            <div className={styles.search}>Search</div>
          </div>
          <div className={styles.valueComparator}>
            <div className={styles.myShelfMenu} onClick={onMyShelfMenuClick}>
              <div className={styles.treeTraverser}>
                <img
                  className={styles.bookshelfIcon}
                  loading="lazy"
                  alt=""
                  src="/bookshelf.svg"
                />
              </div>
              <div className={styles.myShelf}>My Shelf</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.positionCalculator}>
        <div className={styles.sizeModifier}>
          <div className={styles.about}>{`About `}</div>
          <div className={styles.support}>Support</div>
          <div className={styles.termsCondition}>{`Terms & Condition`}</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar1;
