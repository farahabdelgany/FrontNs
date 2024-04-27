import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent5 from "../components/GroupComponent5";
import GroupComponent4 from "../components/GroupComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import FooterSection from "../components/FooterSection";
import FrameComponent31 from "../components/FrameComponent3";
import ThinkerContainer from "../components/FrameComponent31";
import styles from "./Search.module.css";

const Search = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  const onHomeMenuContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMyShelfMenuClick = useCallback(() => {
    navigate("/my-shelf");
  }, [navigate]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    navigate("/transcation-history");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/search-filter");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  return (
    <div className={styles.search}>
      <div className={styles.bgVectorParent}>
        <img className={styles.bgVectorIcon} alt="" src="/bg-vector1.svg" />
        <div className={styles.sideBar}>
          <div className={styles.sideBar1}>
            <div className={styles.homeMenu} onClick={onHomeMenuContainerClick}>
              <div className={styles.heroiconsMinihomeWrapper}>
                <img
                  className={styles.heroiconsMinihome}
                  loading="lazy"
                  alt=""
                  src="/heroiconsminihome1.svg"
                />
              </div>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.sideBarInner}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.searchWrapper}>
                    <img
                      className={styles.searchIcon}
                      loading="lazy"
                      alt=""
                      src="/search1.svg"
                    />
                  </div>
                  <div className={styles.search1}>Search</div>
                </div>
                <div className={styles.myShelfMenuWrapper}>
                  <div
                    className={styles.myShelfMenu}
                    onClick={onMyShelfMenuClick}
                  >
                    <div className={styles.bookshelfWrapper}>
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
            <div className={styles.sideBarChild}>
              <div className={styles.aboutParent}>
                <div className={styles.about}>{`About `}</div>
                <div className={styles.support}>Support</div>
                <div
                  className={styles.termsCondition}
                >{`Terms & Condition`}</div>
              </div>
            </div>
          </div>
          <div
            className={styles.favouriteMenu}
            onClick={onFavouriteMenuContainerClick}
          >
            <img className={styles.giveGiftIcon} alt="" src="/give-gift.svg" />
            <div className={styles.contribute}>Contribute</div>
          </div>
        </div>
        <h1 className={styles.shelf}>Shelf</h1>
        <h1 className={styles.smart}>Smart</h1>
      </div>
      <main className={styles.mainArea}>
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <header className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.quickSearchBarParent}>
                <div className={styles.quickSearchBar}>
                  <div className={styles.quickSearchBarChild} />
                  <div className={styles.frameDiv}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <div className={styles.all}>All</div>
                      <div className={styles.polygonWrapper}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/code-testing.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.searchContainer}>
                      <div className={styles.search2}>Search</div>
                    </div>
                  </div>
                  <div className={styles.quickSearchBarInner}>
                    <div className={styles.frameParent1}>
                      <div className={styles.searchFrame}>
                        <img
                          className={styles.searchIcon1}
                          alt=""
                          src="/search.svg"
                        />
                      </div>
                      <div className={styles.lineDiv} />
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
                    <img
                      className={styles.translateIcon}
                      alt=""
                      src="/translate.svg"
                    />
                  </div>
                  <div className={styles.langWrapper}>
                    <div className={styles.lang1}>Lang</div>
                  </div>
                  <div className={styles.langInner}>
                    <img
                      className={styles.polygonIcon}
                      alt=""
                      src="/code-testing.svg"
                    />
                  </div>
                </button>
                <div className={styles.frameWrapper1}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.logicBranch}>
                      <img
                        className={styles.timeIcon}
                        loading="lazy"
                        alt=""
                        src="/time1.svg"
                      />
                      <div className={styles.hrs}>09:00 hrs</div>
                    </div>
                    <div className={styles.logicBranch1}>
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
                  <div className={styles.errorHandler}>
                    <img
                      className={styles.valueComparatorIcon}
                      alt=""
                      src="/ellipse-10@2x.png"
                    />
                  </div>
                  <div className={styles.functionInvoker}>
                    <div className={styles.kenson}>Kenson</div>
                  </div>
                  <div className={styles.dataFilter}>
                    <img
                      className={styles.branchPredictorIcon}
                      alt=""
                      src="/code-testing.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv} onClick={onGroupContainerClick}>
              <div className={styles.frameChild1} />
              <div className={styles.browse}>Browse</div>
              <div className={styles.polygonContainer}>
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/code-testing.svg"
                />
              </div>
            </div>
          </header>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent2}>
              <div className={styles.titleParent}>
                <div className={styles.title}>Title</div>
                <div className={styles.frameParent3}>
                  <div className={styles.ratingsParent}>
                    <div className={styles.ratings}>Ratings</div>
                    <div className={styles.category}>Category</div>
                  </div>
                  <div className={styles.availability}>Availability</div>
                  <div className={styles.status}>Status</div>
                </div>
              </div>
              <GroupComponent5 onGroupButtonClick={onGroupButtonClick} />
              <GroupComponent4 />
              <GroupComponent3 onFrameContainerClick={onFrameContainerClick} />
              <GroupComponent5
                onFrameContainer2Click={onFrameContainer2Click}
              />
              <footer className={styles.groupFooter}>
                <div className={styles.frameChild3} />
                <div className={styles.frameWrapper3}>
                  <div className={styles.rectangleParent1}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle-16@2x.png"
                    />
                    <div className={styles.frameParent4}>
                      <div className={styles.dontMakeMeThinkParent}>
                        <div
                          className={styles.dontMakeMe}
                        >{`Don’t Make Me Think `}</div>
                        <div className={styles.steveKrug2000}>
                          Steve Krug, 2000
                        </div>
                      </div>
                      <div className={styles.secondEdition}>Second Edition</div>
                    </div>
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>
                    <span>4.5</span>
                    <span className={styles.span}>/5</span>
                  </div>
                </div>
                <div className={styles.frameWrapper4}>
                  <div className={styles.computerScienceParent}>
                    <div className={styles.computerScience}>
                      Computer Science
                    </div>
                    <div className={styles.uxDesign}>UX Design</div>
                  </div>
                </div>
                <FooterSection />
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameParent5}>
                    <div className={styles.rectangleParent2}>
                      <div className={styles.frameChild4} />
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
                <div className={styles.frameWrapper6}>
                  <div
                    className={styles.heartParent}
                    onClick={onFrameContainer3Click}
                  >
                    <img className={styles.heartIcon} alt="" src="/heart.svg" />
                    <button className={styles.groupButton}>
                      <div className={styles.frameChild5} />
                      <div className={styles.preview}>Preview</div>
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
        <div className={styles.frameParent6}>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild6} />
            <div className={styles.frameWrapper7}>
              <div className={styles.rectangleParent4}>
                <img
                  className={styles.frameChild7}
                  alt=""
                  src="/rectangle-16@2x.png"
                />
                <div className={styles.frameParent7}>
                  <div className={styles.dontMakeMeThinkGroup}>
                    <div
                      className={styles.dontMakeMe1}
                    >{`Don’t Make Me Think `}</div>
                    <div className={styles.steveKrug20001}>
                      Steve Krug, 2000
                    </div>
                  </div>
                  <div className={styles.secondEdition1}>Second Edition</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper8}>
              <div className={styles.frameParent8}>
                <div className={styles.container}>
                  <div className={styles.div1}>
                    <span>4.5</span>
                    <span className={styles.span1}>/5</span>
                  </div>
                </div>
                <div className={styles.computerScienceGroup}>
                  <div className={styles.computerScience1}>
                    Computer Science
                  </div>
                  <div className={styles.uxDesign1}>UX Design</div>
                </div>
              </div>
            </div>
            <FrameComponent31 />
            <div className={styles.frameWrapper9}>
              <div className={styles.frameParent9}>
                <div className={styles.rectangleParent5}>
                  <div className={styles.frameChild8} />
                  <div className={styles.inShelf1}>In-Shelf</div>
                </div>
                <div className={styles.heroiconsMinimapPinGroup}>
                  <img
                    className={styles.heroiconsMinimapPin1}
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className={styles.csA151}> CS A-15</div>
                </div>
              </div>
            </div>
            <div className={styles.heartWrapper}>
              <img className={styles.heartIcon1} alt="" src="/heart.svg" />
            </div>
            <div className={styles.frameWrapper10}>
              <div className={styles.rectangleParent6}>
                <div className={styles.frameChild9} />
                <div className={styles.preview1}>Preview</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent7}>
            <div className={styles.frameChild10} />
            <div className={styles.frameWrapper11}>
              <div className={styles.rectangleParent8}>
                <img
                  className={styles.frameChild11}
                  alt=""
                  src="/rectangle-16@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.dontMakeMeThinkContainer}>
                    <div
                      className={styles.dontMakeMe2}
                    >{`Don’t Make Me Think `}</div>
                    <div className={styles.steveKrug20002}>
                      Steve Krug, 2000
                    </div>
                  </div>
                  <div className={styles.secondEdition2}>Second Edition</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper12}>
              <div className={styles.frameParent11}>
                <div className={styles.frame}>
                  <div className={styles.div2}>
                    <span>4.5</span>
                    <span className={styles.span2}>/5</span>
                  </div>
                </div>
                <div className={styles.computerScienceContainer}>
                  <div className={styles.computerScience2}>
                    Computer Science
                  </div>
                  <div className={styles.uxDesign2}>UX Design</div>
                </div>
              </div>
            </div>
            <FrameComponent31 />
            <div className={styles.frameWrapper13}>
              <div className={styles.frameParent12}>
                <div className={styles.rectangleParent9}>
                  <div className={styles.frameChild12} />
                  <div className={styles.inShelf2}>In-Shelf</div>
                </div>
                <div className={styles.heroiconsMinimapPinContainer}>
                  <img
                    className={styles.heroiconsMinimapPin2}
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className={styles.csA152}> CS A-15</div>
                </div>
              </div>
            </div>
            <div className={styles.heartContainer}>
              <img className={styles.heartIcon2} alt="" src="/heart.svg" />
            </div>
            <div className={styles.frameWrapper14}>
              <div className={styles.rectangleParent10}>
                <div className={styles.frameChild13} />
                <div className={styles.preview2}>Preview</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent11}>
            <div className={styles.frameChild14} />
            <div className={styles.frameWrapper15}>
              <div className={styles.rectangleParent12}>
                <img
                  className={styles.frameChild15}
                  alt=""
                  src="/rectangle-16@2x.png"
                />
                <div className={styles.frameParent13}>
                  <div className={styles.dontMakeMeThinkParent1}>
                    <div
                      className={styles.dontMakeMe3}
                    >{`Don’t Make Me Think `}</div>
                    <div className={styles.steveKrug20003}>
                      Steve Krug, 2000
                    </div>
                  </div>
                  <div className={styles.secondEdition3}>Second Edition</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper16}>
              <div className={styles.frameParent14}>
                <div className={styles.wrapper1}>
                  <div className={styles.div3}>
                    <span>4.5</span>
                    <span className={styles.span3}>/5</span>
                  </div>
                </div>
                <div className={styles.computerScienceParent1}>
                  <div className={styles.computerScience3}>
                    Computer Science
                  </div>
                  <div className={styles.uxDesign3}>UX Design</div>
                </div>
              </div>
            </div>
            <FrameComponent31 />
            <div className={styles.frameWrapper17}>
              <div className={styles.frameParent15}>
                <div className={styles.rectangleParent13}>
                  <div className={styles.frameChild16} />
                  <div className={styles.inShelf3}>In-Shelf</div>
                </div>
                <div className={styles.heroiconsMinimapPinParent1}>
                  <img
                    className={styles.heroiconsMinimapPin3}
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className={styles.csA153}> CS A-15</div>
                </div>
              </div>
            </div>
            <div className={styles.heartFrame}>
              <img className={styles.heartIcon3} alt="" src="/heart.svg" />
            </div>
            <div className={styles.frameWrapper18}>
              <div className={styles.rectangleParent14}>
                <div className={styles.frameChild17} />
                <div className={styles.preview3}>Preview</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent15}>
            <div className={styles.frameChild18} />
            <div className={styles.frameWrapper19}>
              <div className={styles.rectangleParent16}>
                <img
                  className={styles.frameChild19}
                  alt=""
                  src="/rectangle-16@2x.png"
                />
                <div className={styles.frameParent16}>
                  <div className={styles.dontMakeMeThinkParent2}>
                    <div
                      className={styles.dontMakeMe4}
                    >{`Don’t Make Me Think `}</div>
                    <div className={styles.steveKrug20004}>
                      Steve Krug, 2000
                    </div>
                  </div>
                  <div className={styles.secondEdition4}>Second Edition</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper20}>
              <div className={styles.frameParent17}>
                <div className={styles.wrapper2}>
                  <div className={styles.div4}>
                    <span>4.5</span>
                    <span className={styles.span4}>/5</span>
                  </div>
                </div>
                <div className={styles.computerScienceParent2}>
                  <div className={styles.computerScience4}>
                    Computer Science
                  </div>
                  <div className={styles.uxDesign4}>UX Design</div>
                </div>
              </div>
            </div>
            <FrameComponent31 />
            <div className={styles.frameWrapper21}>
              <div className={styles.frameParent18}>
                <div className={styles.rectangleParent17}>
                  <div className={styles.frameChild20} />
                  <div className={styles.inShelf4}>In-Shelf</div>
                </div>
                <div className={styles.heroiconsMinimapPinParent2}>
                  <img
                    className={styles.heroiconsMinimapPin4}
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className={styles.csA154}> CS A-15</div>
                </div>
              </div>
            </div>
            <div className={styles.heartWrapper1}>
              <img className={styles.heartIcon4} alt="" src="/heart.svg" />
            </div>
            <div className={styles.frameWrapper22}>
              <div className={styles.rectangleParent18}>
                <div className={styles.frameChild21} />
                <div className={styles.preview4}>Preview</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent19}>
            <div className={styles.frameChild22} />
            <div className={styles.frameWrapper23}>
              <div className={styles.rectangleParent20}>
                <img
                  className={styles.frameChild23}
                  alt=""
                  src="/rectangle-16@2x.png"
                />
                <div className={styles.frameParent19}>
                  <div className={styles.dontMakeMeThinkParent3}>
                    <div
                      className={styles.dontMakeMe5}
                    >{`Don’t Make Me Think `}</div>
                    <div className={styles.steveKrug20005}>
                      Steve Krug, 2000
                    </div>
                  </div>
                  <div className={styles.secondEdition5}>Second Edition</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper24}>
              <div className={styles.frameParent20}>
                <div className={styles.wrapper3}>
                  <div className={styles.div5}>
                    <span>4.5</span>
                    <span className={styles.span5}>/5</span>
                  </div>
                </div>
                <div className={styles.computerScienceParent3}>
                  <div className={styles.computerScience5}>
                    Computer Science
                  </div>
                  <div className={styles.uxDesign5}>UX Design</div>
                </div>
              </div>
            </div>
            <FrameComponent31 />
            <div className={styles.frameWrapper25}>
              <div className={styles.frameParent21}>
                <div className={styles.rectangleParent21}>
                  <div className={styles.frameChild24} />
                  <div className={styles.inShelf5}>In-Shelf</div>
                </div>
                <div className={styles.heroiconsMinimapPinParent3}>
                  <img
                    className={styles.heroiconsMinimapPin5}
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className={styles.csA155}> CS A-15</div>
                </div>
              </div>
            </div>
            <div className={styles.heartWrapper2}>
              <img className={styles.heartIcon5} alt="" src="/heart.svg" />
            </div>
            <div className={styles.frameWrapper26}>
              <div className={styles.rectangleParent22}>
                <div className={styles.frameChild25} />
                <div className={styles.preview5}>Preview</div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.groupSection}>
          <div className={styles.frameChild26} />
          <ThinkerContainer />
          <div className={styles.frameWrapper27}>
            <div className={styles.frameParent22}>
              <div className={styles.wrapper4}>
                <div className={styles.div6}>
                  <span>4.5</span>
                  <span className={styles.span6}>/5</span>
                </div>
              </div>
              <div className={styles.computerScienceParent4}>
                <div className={styles.computerScience6}>Computer Science</div>
                <div className={styles.uxDesign6}>UX Design</div>
              </div>
            </div>
          </div>
          <FrameComponent31 />
          <div className={styles.frameWrapper28}>
            <div className={styles.frameParent23}>
              <div className={styles.rectangleParent23}>
                <div className={styles.frameChild27} />
                <div className={styles.inShelf6}>In-Shelf</div>
              </div>
              <div className={styles.heroiconsMinimapPinParent4}>
                <img
                  className={styles.heroiconsMinimapPin6}
                  alt=""
                  src="/heroiconsminimappin@2x.png"
                />
                <div className={styles.csA156}> CS A-15</div>
              </div>
            </div>
          </div>
          <div className={styles.heartWrapper3}>
            <img className={styles.heartIcon6} alt="" src="/heart.svg" />
          </div>
          <div className={styles.frameWrapper29}>
            <div className={styles.rectangleParent24}>
              <div className={styles.frameChild28} />
              <div className={styles.preview6}>Preview</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;
