import { useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import SideMenu from "../components/SideBar";


const Home = () => {
  const navigate = useNavigate();

  const onPaymentsTextClick = useCallback(() => {
    // Please sync "Payments" to the project
  }, []);

  const onLogoutTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onPathPickerClick = useCallback(() => {
    navigate("/home-admin");
  }, [navigate]);

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
    <div className={styles.homeProfile}>
      <main className={styles.mainAreaWrapper}>
        <div className={styles.mainArea}>
          <div className={styles.recommendedBookList}>
            <div className={styles.frameParent}>
              <div className={styles.rectangleWrapper}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
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
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="/rectangle-12-1@2x.png"
              />
              <div className={styles.theDesignOfEveryParent}>
                <div className={styles.theDesignOf}>The Design of Every..</div>
                <div className={styles.donNorman1988}>Don Norman, 1988</div>
                <div className={styles.div1}>
                  <span>4.5</span>
                  <span className={styles.span1}>/5</span>
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-12-2@2x.png"
              />
              <div className={styles.sprintHowToSolveParent}>
                <div className={styles.sprintHow}>Sprint : How to solve...</div>
                <div className={styles.jakeKnapp2000}>Jake Knapp, 2000</div>
                <div className={styles.div2}>
                  <span>4.5</span>
                  <span className={styles.span2}>/5</span>
                </div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-12-3@2x.png"
              />
              <div className={styles.learnUxDesignGrParent}>
                <div className={styles.learnUx}>Learn UX : Design Gr...</div>
                <div className={styles.jeffGothelf2016}>Jeff Gothelf, 2016</div>
                <div className={styles.div3}>
                  <span>4.5</span>
                  <span className={styles.span3}>/5</span>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameChild1}
                alt=""
                src="/rectangle-12-4@2x.png"
              />
              <div className={styles.theRoadToReactParent}>
                <div className={styles.theRoadTo}>The Road to React</div>
                <div className={styles.steveKrug20001}>Steve Krug, 2000</div>
                <div className={styles.div4}>
                  <span>4.5</span>
                  <span className={styles.span4}>/5</span>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <img
                className={styles.frameChild2}
                alt=""
                src="/rectangle-12-5@2x.png"
              />
              <div className={styles.richDadPoorDadParent}>
                <div className={styles.richDadPoor}>Rich Dad Poor Dad</div>
                <div className={styles.robertTkiyosaki1997}>
                  Robert T.Kiyosaki, 1997
                </div>
                <div className={styles.div5}>
                  <span>5</span>
                  <span className={styles.span5}>/5</span>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent2}>
              <img
                className={styles.frameChild3}
                alt=""
                src="/rectangle-12-6@2x.png"
              />
              <div className={styles.harryPotterAndTheParent}>
                <div className={styles.harryPotterAnd}>
                  Harry Potter and The...
                </div>
                <div className={styles.jkRowling2002}>J.K. Rowling, 2002</div>
                <div className={styles.div6}>
                  <span>4.9</span>
                  <span className={styles.span6}>/5</span>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent3}>
              <img
                className={styles.frameChild4}
                alt=""
                src="/rectangle-12-7@2x.png"
              />
              <div className={styles.youDontKnowJsSParent}>
                <div className={styles.youDontKnow}>You Don’t Know JS: S..</div>
                <div className={styles.kyleSimpson2014}>Kyle Simpson, 2014</div>
                <div className={styles.div7}>
                  <span>4.9</span>
                  <span className={styles.span7}>/5</span>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent3 />
          <div className={styles.squareSet}>
            <div className={styles.triangleTrio}>
              <div className={styles.miniCaurosel}>
                <div className={styles.todaysQuoteWrapper}>
                  <h1 className={styles.todaysQuote}>Today’s Quote</h1>
                </div>
                <div className={styles.imageInset}>
                  <h1 className={styles.thereIsMore}>
                    “There is more treasure in books than in all the pirate’s
                    loot on Treasure Island.”
                  </h1>
                </div>
                <div className={styles.waltDisneyParent}>
                  <h1 className={styles.waltDisney}>-Walt Disney</h1>
                  <div className={styles.layoutLattice}>
                    <div className={styles.alignmentAxis}>
                      <div className={styles.distributionDomain} />
                      <div className={styles.distributionDomain1} />
                      <div className={styles.distributionDomain2} />
                      <div className={styles.distributionDomain3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pathPassageParent}>
                <div className={styles.pathPassage}>
                  <div className={styles.newsNewArrivals}>
                    <div className={styles.blendBridge}>
                      <div className={styles.opacityOperator}>
                        <div className={styles.opacityOperatorChild} />
                        <h1 className={styles.newArrivals}>New Arrivals</h1>
                      </div>
                      <div className={styles.strokeStyleSetter}>
                        <h1 className={styles.newsRack}>News Rack</h1>
                      </div>
                    </div>
                    <div className={styles.contrastController}>
                      <div className={styles.dropShadowDabber}>
                        <img
                          className={styles.gradientGeneratorIcon}
                          alt=""
                          src="/rectangle-12-35@2x.png"
                        />
                      </div>
                      <div className={styles.transformTranslator}>
                        <img
                          className={styles.rotationRotatorIcon}
                          alt=""
                          src="/rectangle-12-6@2x.png"
                        />
                      </div>
                      <div className={styles.scalingScaler}>
                        <img
                          className={styles.skewingSkewerIcon}
                          alt=""
                          src="/rectangle-12-3@2x.png"
                        />
                      </div>
                      <div className={styles.reflectReflector}>
                        <img
                          className={styles.perspectivePerspectivizerIcon}
                          alt=""
                          src="/rectangle-12-38@2x.png"
                        />
                      </div>
                      <div className={styles.contrastControllerInner}>
                        <img
                          className={styles.frameChild5}
                          alt=""
                          src="/rectangle-12-39@2x.png"
                        />
                      </div>
                      <div className={styles.contrastControllerChild}>
                        <img
                          className={styles.frameChild6}
                          alt=""
                          src="/rectangle-12-40@2x.png"
                        />
                      </div>
                      <div className={styles.contrastControllerInner1}>
                        <img
                          className={styles.frameChild7}
                          alt=""
                          src="/rectangle-12-41@2x.png"
                        />
                      </div>
                      <div className={styles.contrastControllerInner2}>
                        <img
                          className={styles.frameChild8}
                          alt=""
                          src="/rectangle-12-42@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className={styles.anchorAnchorer}>
              <div className={styles.guideGuider} />
              <div className={styles.snapSnapper}>
                <div className={styles.groupDiv}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.timeIcon}
                    loading="lazy"
                    alt=""
                    src="/time.svg"
                  />
                  <div className={styles.am}>09:00 AM</div>
                  <img
                    className={styles.pathPartnerIcon}
                    alt=""
                    src="/import-export-manager.svg"
                  />
                  <div className={styles.mar2023}>4-Mar-2023</div>
                </div>
                <button className={styles.lang}>
                  <div className={styles.langChild} />
                  <img
                    className={styles.translateIcon}
                    alt=""
                    src="/translate.svg"
                  />
                  <div className={styles.lang1}>Lang</div>
                  <img
                    className={styles.labelLabelerIcon}
                    alt=""
                    src="/code-testing.svg"
                  />
                </button>
                <div className={styles.shapeShaper}>
                  <div
                    className={styles.pathPicker}
                    onClick={onPathPickerClick}
                  />
                  <img
                    className={styles.blendBlenderIcon}
                    loading="lazy"
                    alt=""
                    src="/ellipse-10@2x.png"
                  />
                  <h1 className={styles.kenson}>Kenson</h1>
                  <img
                    className={styles.transformTransposerIcon}
                    alt=""
                    src="/code-testing.svg"
                  />
                </div>
                <div className={styles.quickSearchBar}>
                  <div className={styles.quickSearchBarChild} />
                  <div className={styles.rectangleParent4}>
                    <div className={styles.frameChild9} />
                    <div className={styles.all}>All</div>
                    <img
                      className={styles.functionApplierIcon}
                      alt=""
                      src="/code-testing.svg"
                    />
                  </div>
                  <img
                    className={styles.barcodeScannerIcon}
                    loading="lazy"
                    alt=""
                    src="/barcode-scanner.svg"
                  />
                  <img
                    className={styles.searchIcon}
                    loading="lazy"
                    alt=""
                    src="/search.svg"
                  />
                  <div className={styles.quickSearchBarItem} />
                  <h1 className={styles.search}>Search</h1>
                </div>
              </div>
            </div>
            <div className={styles.goodMorningParent}>
              <h1 className={styles.goodMorning}>Good Morning</h1>
              <div className={styles.inputProcessorParent}>
                <div className={styles.inputProcessor}>
                  <h1 className={styles.recommendedForYou}>
                    Recommended for You
                  </h1>
                  <h1 className={styles.recentReadings}></h1>
                </div>
                <div className={styles.inputProcessor1}>
                  
                  <h1 className={styles.showAll1}>Show All</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.ruleApplier}>
        <img className={styles.bgVectorIcon} alt="" src="/bg-vector.svg" />
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
        <h1 className={styles.shelf}>Shelf</h1>
        <h1 className={styles.smart}>Smart</h1>
      </div>
    </div>
  );
};

export default Home;
