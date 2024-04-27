import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AccountPrivacy.module.css";
import stylenew from "./MyShelf.module.css";

const MyShelf = () => {
  const navigate = useNavigate();

  const onProfileAccountContainerClick = useCallback(() => {
    navigate("/homeprofile");
  }, [navigate]);


  return (
    <div className={styles.accountPrivacy}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector.svg" />
      <main className={styles.dashboard}>
        <div className={styles.sideBar}>
          <div className={styles.sideMenu}>
            <div className={styles.sideMenu1}>
              <div className={styles.homeMenu}>
                <img
                  className={styles.heroiconsMinihome}
                  loading="lazy"
                  alt=""
                  src="/heroiconsminihome.svg"
                />
                <h3 className={styles.home}>Home</h3>
              </div>
              <div className={styles.myShelfMenu}>
                <img
                  className={styles.bookshelfIcon}
                  loading="lazy"
                  alt=""
                  src="/bookshelf.svg"
                />
                <h3 className={styles.dashboard1}>Dashboard</h3>
              </div>
              <div className={styles.searchMenu}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search-1.svg"
                />
                <h3 className={styles.search}>Search</h3>
              </div>
              <div className={styles.favouriteMenu}>
                <img
                  className={styles.giveGiftIcon}
                  alt=""
                  src="/give-gift.svg"
                />
                <div className={styles.contribute}>Contribute</div>
              </div>
            </div>
          </div>
          <div className={styles.sideBarInner}>
            <div className={styles.aboutParent}>
              <div className={styles.about}>{`About `}</div>
              <div className={styles.support}>Support</div>
              <div className={styles.termsCondition}>{`Terms & Condition`}</div>
            </div>
          </div>
        </div>
        <div className={styles.shelfParent}>
          <h1 className={styles.shelf}>Shelf</h1>
          <h1 className={styles.smart}>Smart</h1>
        </div>
        <b className={styles.bookList}>Book list</b>
        <header className={styles.quickSearchBarParent}>
          <div className={styles.quickSearchBar}>
            <div className={styles.quickSearchBarChild} />
            <div className={styles.frameParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.all}>All</div>
                <div className={styles.polygonWrapper}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/code-testing.svg"
                  />
                </div>
              </div>
              <div className={styles.searchWrapper}>
                <h3 className={styles.search1}>Search</h3>
              </div>
            </div>
            <div className={styles.quickSearchBarInner}>
              <div className={styles.frameGroup}>
                <div className={styles.searchContainer}>
                  <img
                    className={styles.searchIcon1}
                    alt=""
                    src="/search.svg"
                  />
                </div>
                <div className={styles.frameInner} />
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
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.timeParent}>
              <img
                className={styles.timeIcon}
                loading="lazy"
                alt=""
                src="/time.svg"
              />
              <div className={styles.am}>09:00 AM</div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/import-export-manager.svg"
              />
              <div className={styles.mar2023}>4-Mar-2023</div>
            </div>
          </div>
          <div
            className={styles.profileAccount}
            onClick={onProfileAccountContainerClick}
          >
            <div className={styles.profileAccountChild} />
            <div className={styles.profileAccountInner}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-10@2x.png"
              />
            </div>
            <div className={styles.kensonWrapper}>
              <div className={styles.kenson}>Kenson</div>
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameChild1}
                alt=""
                src="/code-testing.svg"
              />
            </div>
          </div>
        </header>
        <section className={styles.setting2}>
        <main className={stylenew.mainArea}>
        <section className={stylenew.frameParent}>
          <div className={stylenew.rectangleParent}>
            <div className={stylenew.frameChild} />
            <div className={stylenew.frameGroup}>
              <div className={stylenew.rectangleGroup}>
                <img
                  className={stylenew.frameItem}
                  loading="lazy"
                  alt=""
                  src="/input-splitter@2x.png"
                />
                <div className={stylenew.dontMakeMe}>Don’t Make Me think</div>
                <div className={stylenew.steveKrug2000}>Steve Krug, 2000</div>
                <div className={stylenew.div}>
                  <span>4.5</span>
                  <span className={stylenew.span}>/5</span>
                </div>
                <button className={stylenew.rectangleContainer}>
                  <div className={stylenew.frameInner} />
                  <div className={stylenew.borrowed}>Borrowed</div>
                </button>
                <button className={stylenew.groupButton}>
                  <div className={stylenew.rectangleDiv} />
                  <div className={stylenew.return}>Return</div>
                </button>
                <div className={stylenew.borrowedOn}>{`Borrowed on `}</div>
                <div className={stylenew.mar20230900}>2 Mar 2023 09:00 AM</div>
                <div className={stylenew.mar2023OverContainer}>
                  <span>{`13 Mar 2023 `}</span>
                  <span className={stylenew.overDue}>(Over Due)</span>
                </div>
                <div className={stylenew.submissionDue}>Submission Due</div>
                <div className={stylenew.ellipseDiv} />
              </div>
              <div className={stylenew.frameDiv}>
                <img
                  className={stylenew.rectangleIcon}
                  alt=""
                  src="/rectangle-12-11@2x.png"
                />
                <div
                  className={stylenew.javaScriptScope}
                >{`Java Script Scope & ..`}</div>
                <div className={stylenew.kyleSimpson2014}>Kyle Simpson, 2014</div>
                <div className={stylenew.div1}>
                  <span>4.5</span>
                  <span className={stylenew.span1}>/5</span>
                </div>
                <button className={stylenew.rectangleParent1}>
                  <div className={stylenew.frameChild1} />
                  <div className={stylenew.borrowed1}>Borrowed</div>
                </button>
                <button className={stylenew.rectangleParent2}>
                  <div className={stylenew.frameChild2} />
                  <div className={stylenew.return1}>Return</div>
                </button>
                <div className={stylenew.borrowedOn1}>{`Borrowed on `}</div>
                <div className={stylenew.mar202309001}>2 Mar 2023 09:00 AM</div>
                <div className={stylenew.mar2023OverContainer1}>
                  <span>{`13 Mar 2023 `}</span>
                  <span className={stylenew.overDue1}>(Over Due)</span>
                </div>
                <div className={stylenew.submissionDue1}>Submission Due</div>
                <div className={stylenew.frameChild3} />
              </div>
              <div className={stylenew.rectangleParent3}>
                <img
                  className={stylenew.frameChild4}
                  alt=""
                  src="/rectangle-12-21@2x.png"
                />
                <div className={stylenew.sprintSolve}>
                  Sprint : Solve Big Pro..
                </div>
                <div className={stylenew.robertTkiyosaki1997}>
                  Robert T.Kiyosaki, 1997
                </div>
                <div className={stylenew.div2}>
                  <span>5</span>
                  <span className={stylenew.span2}>/5</span>
                </div>
                <button className={stylenew.rectangleParent4}>
                  <div className={stylenew.frameChild5} />
                  <div className={stylenew.eBook}>E-BOOK</div>
                </button>
                <button className={stylenew.rectangleParent5}>
                  <div className={stylenew.frameChild6} />
                  <div className={stylenew.read}>{`Read `}</div>
                </button>
                <div className={stylenew.borrowedOn2}>{`Borrowed on `}</div>
                <div className={stylenew.mar202309002}>11 Mar 2023 09:00 AM</div>
                <div className={stylenew.mar2023}>14 Mar 2023</div>
                <div className={stylenew.submissionDue2}>Submission Due</div>
              </div>
            </div>
          </div>
          <div className={stylenew.yourShelfParent}>
            <h2 className={stylenew.yourShelf}>
              <span>{`Your `}</span>
              <span className={stylenew.shelf}>Shelf</span>
            </h2>
            <div className={stylenew.allBooksParent}>
              <div className={stylenew.allBooks}>All Books</div>
              <div className={stylenew.favourite}>Favourite</div>
              <div className={stylenew.borrowedBooks}>Borrowed Books</div>
              <div className={stylenew.eBooks}>E-Books</div>
            </div>
            <div className={stylenew.frameContainer}>
              <div className={stylenew.frameParent1}>
                <div className={stylenew.rectangleParent6}>
                  <img
                    className={stylenew.frameChild7}
                    alt=""
                    src="/rectangle-12-31@2x.png"
                  />
                  <div className={stylenew.dontMakeMeThinkParent}>
                    <div className={stylenew.dontMakeMe1}>
                      Don’t Make Me think
                    </div>
                    <div className={stylenew.steveKrug20001}>
                      Steve Krug, 2000
                    </div>
                    <div className={stylenew.div3}>
                      <span>4.5</span>
                      <span className={stylenew.span3}>/5</span>
                    </div>
                  </div>
                </div>
                <div className={stylenew.frameWrapper}>
                  <div className={stylenew.frameParent2}>
                    <div className={stylenew.borrowedOnWrapper}>
                      <div className={stylenew.borrowedOn3}>{`Borrowed on `}</div>
                    </div>
                    <div className={stylenew.mar20230900AmWrapper}>
                      <div className={stylenew.mar202309003}>
                        11 Mar 2023 09:00 AM
                      </div>
                    </div>
                    <div className={stylenew.submissionDueWrapper}>
                      <div className={stylenew.submissionDue3}>
                        Submission Due
                      </div>
                    </div>
                    <div className={stylenew.mar2023Wrapper}>
                      <div className={stylenew.mar20231}>14 Mar 2023</div>
                    </div>
                    <div className={stylenew.frameWrapper1}>
                      <button className={stylenew.rectangleParent7}>
                        <div className={stylenew.frameChild8} />
                        <div className={stylenew.borrowed2}>Borrowed</div>
                      </button>
                    </div>
                    <button className={stylenew.rectangleParent8}>
                      <div className={stylenew.frameChild9} />
                      <div className={stylenew.return2}>Return</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={stylenew.frameParent3}>
                <div className={stylenew.rectangleParent9}>
                  <img
                    className={stylenew.frameChild10}
                    alt=""
                    src="/rectangle-12-43@2x.png"
                  />
                  <div className={stylenew.richDadPoorDadParent}>
                    <div className={stylenew.richDadPoor}>Rich Dad Poor Dad</div>
                    <div className={stylenew.robertTkiyosaki19971}>
                      Robert T.Kiyosaki, 1997
                    </div>
                    <div className={stylenew.div4}>
                      <span>5</span>
                      <span className={stylenew.span4}>/5</span>
                    </div>
                  </div>
                </div>
                <div className={stylenew.frameWrapper2}>
                  <div className={stylenew.frameParent4}>
                    <div className={stylenew.borrowedOnContainer}>
                      <div className={stylenew.borrowedOn4}>{`Borrowed on `}</div>
                    </div>
                    <div className={stylenew.mar20230900AmContainer}>
                      <div className={stylenew.mar202309004}>
                        11 Mar 2023 09:00 AM
                      </div>
                    </div>
                    <div className={stylenew.submissionDueContainer}>
                      <div className={stylenew.submissionDue4}>
                        Submission Due
                      </div>
                    </div>
                    <div className={stylenew.mar2023Container}>
                      <div className={stylenew.mar20232}>14 Mar 2023</div>
                    </div>
                    <div className={stylenew.frameParent5}>
                      <button className={stylenew.rectangleParent10}>
                        <div className={stylenew.frameChild11} />
                        <div className={stylenew.eBook1}>E-BOOK</div>
                      </button>
                      <button className={stylenew.rectangleParent11}>
                        <div className={stylenew.frameChild12} />
                        <div className={stylenew.readWrapper}>
                          <div className={stylenew.read1}>{`Read `}</div>
                        </div>
                        <img
                          className={stylenew.groupIcon}
                          alt=""
                          src="/group-32.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={stylenew.logicBranch}>
            <div className={stylenew.dataInput}>
              <div className={stylenew.audioBooksParent}>
                <div className={stylenew.audioBooks}>Audio Books</div>
                <div
                  className={stylenew.articlesJournals}
                >{`Articles & Journals`}</div>
              </div>
            </div>
            <div className={stylenew.iterationLoop}>
              <div className={stylenew.functionCall}>
                <div className={stylenew.conditionalSplit}>
                  <div className={stylenew.valueFilter}>
                    <img
                      className={stylenew.errorHandlerIcon}
                      alt=""
                      src="/input-splitter@2x.png"
                    />
                    <div className={stylenew.dataMerge}>
                      <div className={stylenew.dontMakeMe2}>
                        Don’t Make Me think
                      </div>
                      <div className={stylenew.steveKrug20002}>
                        Steve Krug, 2000
                      </div>
                      <div className={stylenew.dataSplitter}>
                        <span>4.5</span>
                        <span className={stylenew.span5}>/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={stylenew.inputCollector}>
                  <div className={stylenew.dataTransformer}>
                    <div className={stylenew.functionComposer}>
                      <div className={stylenew.logicCombiner}>
                        <div className={stylenew.logicCombinerChild} />
                      </div>
                      <div className={stylenew.borrowedOn5}>{`Borrowed on `}</div>
                    </div>
                  </div>
                  <div className={stylenew.dataValidator}>
                    <div className={stylenew.mar202309005}>
                      2 Mar 2023 09:00 AM
                    </div>
                  </div>
                  <div className={stylenew.logicCalculator}>
                    <div className={stylenew.submissionDue5}>Submission Due</div>
                  </div>
                  <div className={stylenew.dataTranslator}>
                    <div className={stylenew.mar2023OverContainer2}>
                      <span>{`13 Mar 2023 `}</span>
                      <span className={stylenew.overDue2}>(Over Due)</span>
                    </div>
                  </div>
                  <div className={stylenew.inputProcessor}>
                    <button className={stylenew.rectangleParent12}>
                      <div className={stylenew.frameChild13} />
                      <div className={stylenew.borrowed3}>Borrowed</div>
                    </button>
                    <button className={stylenew.rectangleParent13}>
                      <div className={stylenew.frameChild14} />
                      <div className={stylenew.return3}>Return</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={stylenew.functionCall1}>
                <div className={stylenew.rectangleParent14}>
                  <img
                    className={stylenew.frameChild15}
                    alt=""
                    src="/rectangle-12-21@2x.png"
                  />
                  <div className={stylenew.dataSorter}>
                    <div className={stylenew.sprintSolve1}>
                      Sprint : Solve Big Pro..
                    </div>
                    <div className={stylenew.robertTkiyosaki19972}>
                      Robert T.Kiyosaki, 1997
                    </div>
                    <div className={stylenew.outputJoiner}>
                      <span>5</span>
                      <span className={stylenew.span6}>/5</span>
                    </div>
                  </div>
                </div>
                <div className={stylenew.functionCallInner}>
                  <div className={stylenew.frameParent6}>
                    <div className={stylenew.borrowedOnFrame}>
                      <div className={stylenew.borrowedOn6}>{`Borrowed on `}</div>
                    </div>
                    <div className={stylenew.dataStack}>
                      <div className={stylenew.queueHandler}>
                        <div className={stylenew.mar202309006}>
                          11 Mar 2023 09:00 AM
                        </div>
                      </div>
                      <div className={stylenew.loopLimit}>
                        <div className={stylenew.submissionDue6}>
                          Submission Due
                        </div>
                      </div>
                      <div className={stylenew.dataStore}>
                        <div className={stylenew.mar20233}>14 Mar 2023</div>
                      </div>
                      <div className={stylenew.signalProcessor}>
                        <button className={stylenew.rectangleParent15}>
                          <div className={stylenew.frameChild16} />
                          <div className={stylenew.eBook2}>E-BOOK</div>
                        </button>
                      </div>
                      <button className={stylenew.rectangleParent16}>
                        <div className={stylenew.frameChild17} />
                        <div className={stylenew.read2}>{`Read `}</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
        </section>
      </main>
    </div>
  );
};

export default MyShelf;