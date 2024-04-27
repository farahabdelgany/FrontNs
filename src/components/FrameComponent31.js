import { useMemo } from "react";
import styles from "./FrameComponent31.module.css";

const ThinkerContainer = ({
  propWidth,
  propAlignSelf,
  propHeight,
  propLineHeight,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const dontMakeMe1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const secondEditionStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  return (
    <div className={styles.frameWrapper} style={frameDiv5Style}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-16@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.dontMakeMeThinkParent}>
            <div
              className={styles.dontMakeMe}
              style={dontMakeMe1Style}
            >{`Don’t Make Me Think `}</div>
            <div className={styles.steveKrug2000}>Steve Krug, 2000</div>
          </div>
          <div className={styles.secondEdition} style={secondEditionStyle}>
            Second Edition
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkerContainer;
