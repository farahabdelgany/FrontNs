import { useMemo } from "react";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({
  rectangle12,
  sprintSolveBigPro,
  robertTKiyosaki1997,
  prop,
  eBOOK,
  read,
  propTop,
  propLeft,
  propLeft1,
  propWidth,
  propBackgroundColor,
  propBackgroundColor1,
  propLeft2,
  propWidth1,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleIconStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const robertTKiyosaki1997Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupButtonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const readStyle = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth1,
    };
  }, [propLeft2, propWidth1]);

  return (
    <div className={styles.rectangleParent} style={frameDiv3Style}>
      <img
        className={styles.frameChild}
        alt=""
        src={rectangle12}
        style={rectangleIconStyle}
      />
      <div className={styles.sprintSolve}>{sprintSolveBigPro}</div>
      <div
        className={styles.robertTkiyosaki1997}
        style={robertTKiyosaki1997Style}
      >
        {robertTKiyosaki1997}
      </div>
      <div className={styles.div}>
        <span>{prop}</span>
        <span className={styles.span}>/5</span>
      </div>
      <button className={styles.rectangleGroup} style={groupButtonStyle}>
        <div className={styles.frameItem} style={rectangleDivStyle} />
        <div className={styles.eBook}>{eBOOK}</div>
      </button>
      <button className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <div className={styles.read} style={readStyle}>
          {read}
        </div>
      </button>
      <div className={styles.borrowedOn}>{`Borrowed on `}</div>
      <div className={styles.mar20230900}>11 Mar 2023 09:00 AM</div>
      <div className={styles.mar2023}>14 Mar 2023</div>
      <div className={styles.submissionDue}>Submission Due</div>
    </div>
  );
};

export default FrameComponent7;
