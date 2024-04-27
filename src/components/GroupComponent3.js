import styles from "./GroupComponent3.module.css";

const GroupComponent3 = ({ onFrameContainerClick }) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-16-2@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.richDadPoorDadParent}>
              <div className={styles.richDadPoor}>Rich Dad Poor Dad</div>
              <div className={styles.robertTkiyosaki1997}>
                Robert T.Kiyosaki, 1997
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>
          <span>4.5</span>
          <span className={styles.span}>/5</span>
        </div>
      </div>
      <div className={styles.financialMgmtWrapper}>
        <div className={styles.financialMgmt}>Financial MGMT</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
            </div>
            <div className={styles.hardCopy}>Hard Copy</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon1} alt="" src="/vector-12.svg" />
            </div>
            <div className={styles.eBook}>E - Book</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.vectorFrame}>
              <img className={styles.vectorIcon2} alt="" src="/vector-12.svg" />
            </div>
            <div className={styles.audioBook}>Audio book</div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent3}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.inShelf}>In-Shelf</div>
          </div>
          <div className={styles.heroiconsMinimapPinParent}>
            <img
              className={styles.heroiconsMinimapPin}
              alt=""
              src="/heroiconsminimappin@2x.png"
            />
            <div className={styles.csA15}> CS A-15</div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.heartParent} onClick={onFrameContainerClick}>
          <img className={styles.heartIcon} alt="" src="/heart.svg" />
          <button className={styles.groupButton}>
            <div className={styles.rectangleDiv} />
            <div className={styles.preview}>Preview</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
