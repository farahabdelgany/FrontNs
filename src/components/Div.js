import { useMemo } from "react";
import styles from "./Div.module.css";

const Div = ({
  frameDivPadding,
  spanPadding,
  propPadding,
  propPadding1,
  frameDivPadding1,
  overhypedPadding,
  shortPadding,
  forgettablePadding,
  propPadding2,
  propPadding3,
  propPadding4,
  propWidth,
  propDisplay,
  propMinWidth,
  propAlignSelf,
}) => {
  const divStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const spanStyle = useMemo(() => {
    return {
      padding: spanPadding,
    };
  }, [spanPadding]);

  const span1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const span2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const span3Style = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  const span4Style = useMemo(() => {
    return {
      padding: overhypedPadding,
    };
  }, [overhypedPadding]);

  const span5Style = useMemo(() => {
    return {
      padding: shortPadding,
    };
  }, [shortPadding]);

  const span6Style = useMemo(() => {
    return {
      padding: forgettablePadding,
    };
  }, [forgettablePadding]);

  const span7Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const span8Style = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const span9Style = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const feedbackStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propDisplay, propMinWidth, propAlignSelf]);

  return (
    <div className={styles.div} style={divStyle}>
      <div className={styles.frameParent}>
        <div className={styles.communityReviewsParent}>
          <h1 className={styles.communityReviews}>Community Reviews</h1>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.paceWrapper}>
                  <div className={styles.pace}>Pace</div>
                </div>
                <div className={styles.span} style={spanStyle}>
                  <div className={styles.meandering100}>
                    <span>{`Meandering `}</span>
                    <span className={styles.span1}> 100%</span>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.enjoyabilityParent}>
                    <div className={styles.enjoyability}>Enjoyability</div>
                    <div className={styles.difficulty}>Difficulty</div>
                  </div>
                </div>
                <div className={styles.spanParent}>
                  <div className={styles.span2} style={span1Style}>
                    <div className={styles.interesting100}>
                      <span>Interesting</span>
                      <span className={styles.span3}> 100%</span>
                    </div>
                  </div>
                  <div className={styles.graphEdge}>
                    <div className={styles.span4} style={span2Style}>
                      <div className={styles.advanced100}>
                        <span className={styles.advanced100TxtContainer}>
                          <span>{`Advanced `}</span>
                          <span className={styles.span5}> 100%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.genresWrapper}>
                    <b className={styles.genres}>Genres</b>
                  </div>
                  <div className={styles.spanGroup}>
                    <div className={styles.span6} style={span3Style}>
                      <div className={styles.horror66}>
                        <span className={styles.horror66TxtContainer}>
                          <span>{`Horror `}</span>
                          <span className={styles.span7}> 66%</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.span8} style={span4Style}>
                      <div className={styles.mystery33}>
                        <span className={styles.mystery33TxtContainer}>
                          <span>{`Mystery `}</span>
                          <span className={styles.span9}> 33%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.moodWrapper}>
                    <div className={styles.mood}>Mood</div>
                  </div>
                  <div className={styles.span10} style={span5Style}>
                    <div className={styles.ominous25}>
                      <span className={styles.ominous25TxtContainer}>
                        <span>{`Ominous `}</span>
                        <span className={styles.span11}> 25%</span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.span12} style={span6Style}>
                    <div className={styles.scientific25}>
                      <span className={styles.scientific25TxtContainer}>
                        <span>
                          <span className={styles.scientific}>Scientific</span>
                          <b className={styles.b}>{` `}</b>
                        </span>
                        <b className={styles.b1}>
                          <span> 25%</span>
                        </b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.impressionsWrapper}>
                      <div className={styles.impressions}>{`Impressions `}</div>
                    </div>
                    <div className={styles.span13} style={span7Style}>
                      <div className={styles.overhyped50}>
                        <span className={styles.overhyped50TxtContainer}>
                          <span>{`Overhyped `}</span>
                          <span className={styles.span14}> 50%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.lengthWrapper}>
                      <div className={styles.length}>{`Length `}</div>
                    </div>
                    <div className={styles.span15} style={span8Style}>
                      <div className={styles.short100}>
                        <span className={styles.short100TxtContainer}>
                          <span>{`Short `}</span>
                          <span className={styles.span16}> 100%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.span17} style={span9Style}>
                  <div className={styles.forgettable50}>
                    <span className={styles.forgettable50TxtContainer}>
                      <span>{`Forgettable `}</span>
                      <span className={styles.span18}> 50%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.feedbackWrapper} style={frameDiv1Style}>
          <h3 className={styles.feedback} style={feedbackStyle}>
            Feedback?
          </h3>
        </div>
      </div>
      <div className={styles.addYourCommunityReviewWrapper}>
        <b className={styles.addYourCommunity}>Add your community review</b>
      </div>
    </div>
  );
};

export default Div;
