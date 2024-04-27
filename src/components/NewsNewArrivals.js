import FrameComponent2 from "./FrameComponent21";
import styles from "./NewsNewArrivals.module.css";

const NewsNewArrivals = () => {
  return (
    <section className={styles.newsNewArrivals}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h2 className={styles.topChoices}>Top choices</h2>
        </div>
        <div className={styles.newsRackWrapper}>
          <h2 className={styles.newsRack}>News Rack</h2>
        </div>
      </div>
      <div className={styles.newsRackArea}>
        <div className={styles.newsRackAreaInner}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/rectangle-12-39@2x.png"
          />
        </div>
        <div className={styles.newsRackAreaChild}>
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-12-40@2x.png"
          />
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-12-41@2x.png"
          />
        </div>
        <div className={styles.newsRackAreaInner1}>
          <img
            className={styles.frameChild1}
            alt=""
            src="/rectangle-12-42@2x.png"
          />
        </div>
      </div>
      <div className={styles.recommendedBookList}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.frameChild2}
              alt=""
              src="/rectangle-12@2x.png"
            />
          </div>
          <div className={styles.dontMakeMeThinkParent}>
            <div className={styles.dontMakeMe}>Don’t Make Me think</div>
            <div className={styles.steveKrug2000}>Steve Krug, 2000</div>
            <div className={styles.div}>
              <span>4.5</span>
              <span className={styles.span}>/5</span>
            </div>
          </div>
        </div>
        <FrameComponent2
          rectangle12="/rectangle-12-1@2x.png"
          theDesignOfEvery="The Design of Every.."
          donNorman1988="Don Norman, 1988"
          prop="4.5"
        />
        <FrameComponent2
          rectangle12="/rectangle-12-2@2x.png"
          theDesignOfEvery="Sprint : How to solve..."
          donNorman1988="Jake Knapp, 2000"
          prop="4.5"
        />
        <FrameComponent2
          rectangle12="/rectangle-12-3@2x.png"
          theDesignOfEvery="Learn UX : Design Gr..."
          donNorman1988="Jeff Gothelf, 2016"
          prop="4.5"
        />
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameChild3}
            alt=""
            src="/rectangle-12-4@2x.png"
          />
          <div className={styles.theRoadToReactParent}>
            <div className={styles.theRoadTo}>The Road to React</div>
            <div className={styles.steveKrug20001}>Steve Krug, 2000</div>
            <div className={styles.div1}>
              <span>4.5</span>
              <span className={styles.span1}>/5</span>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.frameChild4}
            alt=""
            src="/rectangle-12-5@2x.png"
          />
          <div className={styles.richDadPoorDadParent}>
            <div className={styles.richDadPoor}>Rich Dad Poor Dad</div>
            <div className={styles.robertTkiyosaki1997}>
              Robert T.Kiyosaki, 1997
            </div>
            <div className={styles.div2}>
              <span>5</span>
              <span className={styles.span2}>/5</span>
            </div>
          </div>
        </div>
        <FrameComponent2
          rectangle12="/rectangle-12-6@2x.png"
          theDesignOfEvery="Harry Potter and The..."
          donNorman1988="J.K. Rowling, 2002"
          prop="4.9"
        />
        <div className={styles.rectangleParent1}>
          <img
            className={styles.frameChild5}
            alt=""
            src="/rectangle-12-7@2x.png"
          />
          <div className={styles.youDontKnowJsSParent}>
            <div className={styles.youDontKnow}>You Don’t Know JS: S..</div>
            <div className={styles.kyleSimpson2014}>Kyle Simpson, 2014</div>
            <div className={styles.div3}>
              <span>4.9</span>
              <span className={styles.span3}>/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsNewArrivals;
