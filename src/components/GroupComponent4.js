import styles from "./GroupComponent4.module.css";

const GroupComponent4 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-16-1@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.theDesignOfEverydayThingsParent}>
              <div className={styles.theDesignOf}>
                The Design of EveryDay Things
              </div>
              <div className={styles.donNorman1988}>Don Norman, 1988</div>
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
      <div className={styles.frameDiv}>
        <div className={styles.computerScienceParent}>
          <div className={styles.computerScience}>Computer Science</div>
          <div className={styles.uxDesign}>UX Design</div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.subtractWrapper}>
              <img
                className={styles.subtractIcon}
                loading="lazy"
                alt=""
                src="/subtract.svg"
              />
            </div>
            <div className={styles.hardCopy}>Hard Copy</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
            </div>
            <div className={styles.eBook}>E - Book</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.subtractContainer}>
              <img
                className={styles.subtractIcon1}
                alt=""
                src="/subtract.svg"
              />
            </div>
            <div className={styles.audioBook}>Audio book</div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.frameParent3}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.borrowed}>Borrowed</div>
          </div>
          <div className={styles.heroiconsMiniuserParent}>
            <img
              className={styles.heroiconsMiniuser}
              loading="lazy"
              alt=""
              src="/heroiconsminiuser.svg"
            />
            <div className={styles.sriram}>{`Sriram `}</div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper3}>
        <div className={styles.heartParent}>
          <img className={styles.heartIcon} alt="" src="/heart-1.svg" />
          <button className={styles.groupButton}>
            <div className={styles.rectangleDiv} />
            <div className={styles.preview}>Preview</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;
