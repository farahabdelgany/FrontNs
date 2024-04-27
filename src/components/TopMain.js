import { useMemo } from "react";
import styles from "./TopMain.module.css";

const TopMain = ({
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propFlex,
  propDebugCommit,
  topMainMargin,
  topMainRight,
  frameDivPadding,
  groupDivPadding,
  groupDivPadding1,
}) => {
  const topMainStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      flex: propFlex,
      debugCommit: propDebugCommit,
      margin: topMainMargin,
      right: topMainRight,
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propFlex,
    propDebugCommit,
    topMainMargin,
    topMainRight,
  ]);

  const frameDiv4Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const groupDivStyle = useMemo(() => {
    return {
      padding: groupDivPadding,
    };
  }, [groupDivPadding]);

  const groupDiv1Style = useMemo(() => {
    return {
      padding: groupDivPadding1,
    };
  }, [groupDivPadding1]);

  return (
    <div className={styles.topMain} style={topMainStyle}>
      <div className={styles.quickSearchBarParent} style={frameDiv4Style}>
        <div className={styles.quickSearchBar}>
          <div className={styles.quickSearchBarChild} />
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent} style={groupDivStyle}>
              <div className={styles.frameChild} />
              <div className={styles.all}>All</div>
              <div className={styles.dataAggregator}>
                <img
                  className={styles.shapeContainerIcon}
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
            <div className={styles.frameGroup}>
              <div className={styles.searchContainer}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                />
              </div>
              <div className={styles.frameItem} />
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
          <div className={styles.sizeScale}>
            <img
              className={styles.spacingManagerIcon}
              alt=""
              src="/code-testing.svg"
            />
          </div>
        </button>
        <div className={styles.rotationAngles}>
          <div className={styles.rectangleGroup} style={groupDiv1Style}>
            <div className={styles.frameInner} />
            <div className={styles.blendModeSelector}>
              <img
                className={styles.timeIcon}
                loading="lazy"
                alt=""
                src="/time1.svg"
              />
              <div className={styles.hrs}>09:00 hrs</div>
            </div>
            <div className={styles.blendModeSelector1}>
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
        <div className={styles.profileAccount}>
          <div className={styles.profileAccountChild} />
          <div className={styles.alignAndDistribute}>
            <img
              className={styles.alignAndDistributeChild}
              alt=""
              src="/ellipse-10@2x.png"
            />
          </div>
          <div className={styles.curveHandler}>
            <div className={styles.kenson}>Kenson</div>
          </div>
          <div className={styles.shapeTransformer}>
            <img
              className={styles.shapeTransformerChild}
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
