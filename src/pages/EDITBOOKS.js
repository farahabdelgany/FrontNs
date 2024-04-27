import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import TopMain from "../components/TopMain";
import SideBarFrame from "../components/SideBarFrame";
import styles from "./EDITBOOKS.module.css";

const EDITBOOKS = () => {
  const navigate = useNavigate();

  const onHomeMenuContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSearchMenuContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    navigate("/transcation-history");
  }, [navigate]);

  return (
    <div className={styles.editbooks}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector1.svg" />
      <div className={styles.mainArea}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <form className={styles.frameGroup}>
              <div className={styles.frameItem} />
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/input-splitter@2x.png"
                />
                <div className={styles.dontMakeMe}>Don’t Make Me think</div>
                <div className={styles.steveKrug2000}>Steve Krug, 2000</div>
                <div className={styles.div}>
                  <span className={styles.span}>4.5</span>
                  <span className={styles.span1}>/5</span>
                </div>
                <button className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.borrowed}>Borrowed</div>
                </button>
                <button className={styles.groupButton}>
                  <div className={styles.frameChild1} />
                  <div className={styles.return}>Return</div>
                </button>
                <div className={styles.borrowedOn}>{`Borrowed on `}</div>
                <div className={styles.mar20230900}>2 Mar 2023 09:00 AM</div>
                <div className={styles.mar2023OverContainer}>
                  <span className={styles.mar2023}>{`13 Mar 2023 `}</span>
                  <span className={styles.overDue}>(Over Due)</span>
                </div>
                <div className={styles.submissionDue}>Submission Due</div>
                <div className={styles.ellipseDiv} />
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.rectangleIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-11@2x.png"
                />
                <div
                  className={styles.javaScriptScope}
                >{`Java Script Scope & ..`}</div>
                <div className={styles.kyleSimpson2014}>Kyle Simpson, 2014</div>
                <div className={styles.div1}>
                  <span className={styles.span2}>4.5</span>
                  <span className={styles.span3}>/5</span>
                </div>
                <button className={styles.rectangleParent1}>
                  <div className={styles.frameChild2} />
                  <div className={styles.borrowed1}>Borrowed</div>
                </button>
                <button className={styles.rectangleParent2}>
                  <div className={styles.frameChild3} />
                  <div className={styles.return1}>Return</div>
                </button>
                <div className={styles.borrowedOn1}>{`Borrowed on `}</div>
                <div className={styles.mar202309001}>2 Mar 2023 09:00 AM</div>
                <div className={styles.mar2023OverContainer1}>
                  <span className={styles.mar20231}>{`13 Mar 2023 `}</span>
                  <span className={styles.overDue1}>(Over Due)</span>
                </div>
                <div className={styles.submissionDue1}>Submission Due</div>
                <div className={styles.frameChild4} />
              </div>
              <div className={styles.rectangleParent3}>
                <img
                  className={styles.frameChild5}
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-21@2x.png"
                />
                <div className={styles.sprintSolve}>
                  Sprint : Solve Big Pro..
                </div>
                <div className={styles.robertTkiyosaki1997}>
                  Robert T.Kiyosaki, 1997
                </div>
                <div className={styles.div2}>
                  <span className={styles.span4}>5</span>
                  <span className={styles.span5}>/5</span>
                </div>
                <button className={styles.rectangleParent4}>
                  <div className={styles.frameChild6} />
                  <div className={styles.eBook}>E-BOOK</div>
                </button>
                <button className={styles.rectangleParent5}>
                  <div className={styles.frameChild7} />
                  <div className={styles.read}>{`Read `}</div>
                </button>
                <div className={styles.borrowedOn2}>{`Borrowed on `}</div>
                <div className={styles.mar202309002}>11 Mar 2023 09:00 AM</div>
                <div className={styles.mar20232}>14 Mar 2023</div>
                <div className={styles.submissionDue2}>Submission Due</div>
              </div>
              <div className={styles.rectangleParent6}>
                <img
                  className={styles.frameChild8}
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-31@2x.png"
                />
                <div className={styles.dontMakeMe1}>Don’t Make Me think</div>
                <div className={styles.steveKrug20001}>Steve Krug, 2000</div>
                <div className={styles.div3}>
                  <span className={styles.span6}>4.5</span>
                  <span className={styles.span7}>/5</span>
                </div>
                <button className={styles.rectangleParent7}>
                  <div className={styles.frameChild9} />
                  <div className={styles.borrowed2}>Borrowed</div>
                </button>
                <button className={styles.rectangleParent8}>
                  <div className={styles.frameChild10} />
                  <div className={styles.return2}>Return</div>
                </button>
                <div className={styles.borrowedOn3}>{`Borrowed on `}</div>
                <div className={styles.mar202309003}>11 Mar 2023 09:00 AM</div>
                <div className={styles.mar20233}>14 Mar 2023</div>
                <div className={styles.submissionDue3}>Submission Due</div>
              </div>
              <div className={styles.rectangleParent9}>
                <img
                  className={styles.frameChild11}
                  alt=""
                  src="/rectangle-12-43@2x.png"
                />
                <div className={styles.richDadPoor}>Rich Dad Poor Dad</div>
                <div className={styles.robertTkiyosaki19971}>
                  Robert T.Kiyosaki, 1997
                </div>
                <div className={styles.div4}>
                  <span className={styles.span8}>5</span>
                  <span className={styles.span9}>/5</span>
                </div>
                <button className={styles.rectangleParent10}>
                  <div className={styles.frameChild12} />
                  <div className={styles.eBook1}>E-BOOK</div>
                </button>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild13} />
                  <input
                    className={styles.read1}
                    placeholder="Read "
                    type="text"
                  />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-32.svg"
                  />
                </div>
                <div className={styles.borrowedOn4}>{`Borrowed on `}</div>
                <div className={styles.mar202309004}>11 Mar 2023 09:00 AM</div>
                <div className={styles.mar20234}>14 Mar 2023</div>
                <div className={styles.submissionDue4}>Submission Due</div>
              </div>
              <div className={styles.rectangleParent11}>
                <img
                  className={styles.frameChild14}
                  loading="lazy"
                  alt=""
                  src="/input-splitter@2x.png"
                />
                <div className={styles.dontMakeMe2}>Don’t Make Me think</div>
                <div className={styles.steveKrug20002}>Steve Krug, 2000</div>
                <div className={styles.div5}>
                  <span className={styles.span10}>4.5</span>
                  <span className={styles.span11}>/5</span>
                </div>
                <button className={styles.rectangleParent12}>
                  <div className={styles.frameChild15} />
                  <div className={styles.borrowed3}>Borrowed</div>
                </button>
                <button className={styles.rectangleParent13}>
                  <div className={styles.frameChild16} />
                  <div className={styles.return3}>Return</div>
                </button>
                <div className={styles.borrowedOn5}>{`Borrowed on `}</div>
                <div className={styles.mar202309005}>2 Mar 2023 09:00 AM</div>
                <div className={styles.mar2023OverContainer2}>
                  <span className={styles.mar20235}>{`13 Mar 2023 `}</span>
                  <span className={styles.overDue2}>(Over Due)</span>
                </div>
                <div className={styles.submissionDue5}>Submission Due</div>
                <div className={styles.frameChild17} />
              </div>
              <div className={styles.rectangleParent14}>
                <img
                  className={styles.frameChild18}
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-21@2x.png"
                />
                <div className={styles.sprintSolve1}>
                  Sprint : Solve Big Pro..
                </div>
                <div className={styles.robertTkiyosaki19972}>
                  Robert T.Kiyosaki, 1997
                </div>
                <div className={styles.div6}>
                  <span className={styles.span12}>5</span>
                  <span className={styles.span13}>/5</span>
                </div>
                <button className={styles.rectangleParent15}>
                  <div className={styles.frameChild19} />
                  <div className={styles.eBook2}>E-BOOK</div>
                </button>
                <button className={styles.rectangleParent16}>
                  <div className={styles.frameChild20} />
                  <div className={styles.read2}>{`Read `}</div>
                </button>
                <div className={styles.borrowedOn6}>{`Borrowed on `}</div>
                <div className={styles.mar202309006}>11 Mar 2023 09:00 AM</div>
                <div className={styles.mar20236}>14 Mar 2023</div>
                <div className={styles.submissionDue6}>Submission Due</div>
              </div>
              <div className={styles.allBooks}>All Books</div>
              <div className={styles.favourite}>Favourite</div>
              <div className={styles.borrowedBooks}>Borrowed Books</div>
              <div
                className={styles.articlesJournals}
              >{`Articles & Journals`}</div>
              <h2 className={styles.yourShelf}>
                <span className={styles.your}>{`Your `}</span>
                <span className={styles.shelf}>Shelf</span>
              </h2>
              <h2 className={styles.notesBookmarks}>{`Notes & Bookmarks`}</h2>
              <div className={styles.rectangleParent17}>
                <div className={styles.frameChild21} />
                <b className={styles.dontMakeMe3}>Don’t Make Me Think Notes</b>
                <div className={styles.lastEdited2hrs}>
                  Last Edited 2hrs ago
                </div>
              </div>
              <div className={styles.rectangleParent18}>
                <div className={styles.frameChild22} />
                <b className={styles.jsNotes}>JS Notes</b>
                <div className={styles.lastEdited2hrs1}>
                  Last Edited 2hrs ago
                </div>
              </div>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild23} />
              </div>
              <div className={styles.frameChild24} />
              <Form aDDBOOK="EDIT BOOK" />
            </form>
          </div>
          <TopMain
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propWidth="unset"
            propFlex="1"
            propDebugCommit="unset"
            topMainMargin="unset"
            topMainRight="unset"
            frameDivPadding="var(--padding-19xl) var(--padding-26xl) var(--padding-5xl) var(--padding-27xl)"
            groupDivPadding="var(--padding-xs) var(--padding-2xs) var(--padding-smi) var(--padding-18xl)"
            groupDivPadding1="var(--padding-sm) var(--padding-33xl) var(--padding-smi) var(--padding-38xl)"
          />
        </div>
        <div className={styles.comparisonOperator}>
          <div className={styles.logicGate}>
            <div className={styles.variableHolder}>
              <div className={styles.valueAdder}>
                <div className={styles.valueSubtractor}>
                  <b className={styles.uxDesign}>UX Design</b>
                  <div className={styles.lastEdited2hrs2}>
                    Last Edited 2hrs ago
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent19}>
                <div className={styles.frameChild25} />
                <b className={styles.examPreparation}>Exam Preparation</b>
                <div className={styles.ifStatement}>
                  <div className={styles.lastEdited1hrs}>
                    Last Edited 1hrs ago
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whileLoop}>
              <h2 className={styles.remainders}>Remainders</h2>
              <div className={styles.switchCase}>
                <div className={styles.latestUpdates}>
                  <div className={styles.latestUpdatesChild} />
                  <div className={styles.returnStatement}>
                    <div className={styles.loopIncrement}>
                      <div className={styles.latesUpdates}>Lates Updates</div>
                      <div className={styles.parameterList}>
                        <div className={styles.serverMaintenanceWill}>
                          Server Maintenance will be done on 16 Mar 2023 from
                          9AM to 10AM
                        </div>
                      </div>
                      <div className={styles.functionName}>
                        <div className={styles.itDepartment}>IT Department</div>
                      </div>
                    </div>
                    <div className={styles.breakStatement}>
                      <div className={styles.postedOn14}>
                        Posted on 14 Mar 2023
                      </div>
                    </div>
                    <div className={styles.breakStatement1}>
                      <img
                        className={styles.breakStatementChild}
                        alt=""
                        src="/line-2.svg"
                      />
                    </div>
                    <div className={styles.breakStatement2}>
                      <div className={styles.serverMaintenanceWillBeDonParent}>
                        <div className={styles.serverMaintenanceWill1}>
                          Server Maintenance will be done on 16 Mar 2023 from
                          9AM to 10AM
                        </div>
                        <div className={styles.itDepartment1}>
                          IT Department
                        </div>
                      </div>
                    </div>
                    <div className={styles.breakStatement3}>
                      <div className={styles.postedOn141}>
                        Posted on 14 Mar 2023
                      </div>
                    </div>
                    <div className={styles.breakStatement4}>
                      <img
                        className={styles.breakStatementItem}
                        alt=""
                        src="/line-2.svg"
                      />
                    </div>
                    <div className={styles.breakStatement5}>
                      <div className={styles.serverMaintenanceWillBeDonGroup}>
                        <div className={styles.serverMaintenanceWill2}>
                          Server Maintenance will be done on 16 Mar 2023 from
                          9AM to 10AM
                        </div>
                        <div className={styles.itDepartment2}>
                          IT Department
                        </div>
                      </div>
                    </div>
                    <div className={styles.breakStatement6}>
                      <div className={styles.postedOn142}>
                        Posted on 14 Mar 2023
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.functionDeclaration}>
                  <div className={styles.rectangleParent20}>
                    <div className={styles.frameChild26} />
                    <div className={styles.globalVariable}>
                      <div className={styles.pendingBooks}>Pending Books</div>
                      <div className={styles.functionParameter}>
                        <div className={styles.functionSignature}>
                          <img
                            className={styles.returnTypeIcon}
                            alt=""
                            src="/rectangle-16-1@2x.png"
                          />
                          <div
                            className={styles.theDesignOfEverydayThingsParent}
                          >
                            <div className={styles.theDesignOf}>
                              The Design of EveryDay Things
                            </div>
                            <div className={styles.donNorman1988}>
                              Don Norman, 1988
                            </div>
                          </div>
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.codeSnippet}>
                            <div className={styles.variableDeclaration}>
                              <div className={styles.mar2023OverContainer3}>
                                <span>{`13 Mar 2023 `}</span>
                                <span className={styles.overDue3}>
                                  (Over Due)
                                </span>
                              </div>
                            </div>
                            <div className={styles.rectangleParent21}>
                              <div className={styles.frameChild27} />
                              <div className={styles.return4}>Return</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.lineWrapper}>
                      <div className={styles.lineDiv} />
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.rectangleParent22}>
                        <img
                          className={styles.frameChild28}
                          alt=""
                          src="/rectangle-16-11@2x.png"
                        />
                        <div className={styles.javaScriptScopeClosuresParent}>
                          <div
                            className={styles.javaScriptScope1}
                          >{`Java Script Scope & Closures`}</div>
                          <div className={styles.kyleSimpson20141}>
                            Kyle Simpson, 2014
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameParent1}>
                          <div className={styles.mar2023OverDueWrapper}>
                            <div className={styles.mar2023OverContainer4}>
                              <span>{`13 Mar 2023 `}</span>
                              <span className={styles.overDue4}>
                                (Over Due)
                              </span>
                            </div>
                          </div>
                          <div className={styles.rectangleParent23}>
                            <div className={styles.frameChild29} />
                            <div className={styles.return5}>Return</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent24}>
                    <div className={styles.frameChild30} />
                    <div className={styles.requestedBooksWrapper}>
                      <div className={styles.requestedBooks}>
                        Requested Books
                      </div>
                    </div>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameParent3}>
                        <div className={styles.frameParent4}>
                          <div className={styles.rectangleParent25}>
                            <img
                              className={styles.frameChild31}
                              alt=""
                              src="/rectangle-16-1@2x.png"
                            />
                            <div className={styles.expectedBy15Container}>
                              <p className={styles.expectedBy}>Expected by</p>
                              <p className={styles.mar20237}>15 Mar 2023</p>
                            </div>
                          </div>
                          <div className={styles.frameParent5}>
                            <div
                              className={styles.theDesignOfEverydayThingsGroup}
                            >
                              <div className={styles.theDesignOf1}>
                                The Design of EveryDay Things
                              </div>
                              <div className={styles.donNorman19881}>
                                Don Norman, 1988
                              </div>
                            </div>
                            <div className={styles.rectangleParent26}>
                              <div className={styles.frameChild32} />
                              <div className={styles.notYetAvailable}>
                                Not Yet Available
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameChild33} />
                      </div>
                      <div className={styles.rectangleParent27}>
                        <img
                          className={styles.frameChild34}
                          alt=""
                          src="/rectangle-16-11@2x.png"
                        />
                        <div className={styles.javaScriptScopeClosuresGroup}>
                          <div
                            className={styles.javaScriptScope2}
                          >{`Java Script Scope & Closures`}</div>
                          <div className={styles.kyleSimpson20142}>
                            Kyle Simpson, 2014
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.frameParent6}>
                        <div className={styles.returnedFromUserWrapper}>
                          <div className={styles.returnedFromUser}>
                            Returned From User
                          </div>
                        </div>
                        <div className={styles.rectangleParent28}>
                          <div className={styles.frameChild35} />
                          <div className={styles.availableNow}>
                            Available Now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBarFrame
        bookshelf="/bookshelf-1.svg"
        giveGift="/give-gift.svg"
        propColor="#4d4d4d"
        propColor1="#8a8a8a"
        sideBarFrameTop="48px"
        sideBarFrameLeft="35px"
        sideBarFrameMargin="unset"
        sideBarFrameBottom="unset"
        onHomeMenuContainerClick={onHomeMenuContainerClick}
        onSearchMenuContainerClick={onSearchMenuContainerClick}
        onFavouriteMenuContainerClick={onFavouriteMenuContainerClick}
      />
      <h1 className={styles.shelf1}>Shelf</h1>
      <h1 className={styles.smart}>Smart</h1>
    </div>
  );
};

export default EDITBOOKS;
