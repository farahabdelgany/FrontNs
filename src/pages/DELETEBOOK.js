import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import SideBarFrame from "../components/SideBarFrame";
import styles from "./DELETEBOOK.module.css";

const DELETEBOOK = () => {
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
    <div className={styles.deleteBook}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector1.svg" />
      <div className={styles.mainArea}>
        <div className={styles.mainAreaInner}>
          <FrameComponent6 />
        </div>
        <div className={styles.mainAreaChild}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.uxDesignParent}>
                <b className={styles.uxDesign}>UX Design</b>
                <div className={styles.lastEdited2hrs}>
                  Last Edited 2hrs ago
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.dontMakeMe}>Don’t Make Me Think Notes</b>
              <div className={styles.lastEdited2hrsAgoWrapper}>
                <div className={styles.lastEdited2hrs1}>
                  Last Edited 2hrs ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.remaindersParent}>
            <h2 className={styles.remainders}>Remainders</h2>
            <div className={styles.latestUpdatesParent}>
              <div className={styles.latestUpdates}>
                <div className={styles.latestUpdatesChild} />
                <div className={styles.frameGroup}>
                  <div className={styles.latesUpdatesParent}>
                    <div className={styles.latesUpdates}>Lates Updates</div>
                    <div className={styles.serverMaintenanceWillBeDonWrapper}>
                      <div className={styles.serverMaintenanceWill}>
                        Server Maintenance will be done on 16 Mar 2023 from 9AM
                        to 10AM
                      </div>
                    </div>
                    <div className={styles.itDepartmentWrapper}>
                      <div className={styles.itDepartment}>IT Department</div>
                    </div>
                  </div>
                  <div className={styles.postedOn14Mar2023Wrapper}>
                    <div className={styles.postedOn14}>
                      Posted on 14 Mar 2023
                    </div>
                  </div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/line-2.svg"
                    />
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.serverMaintenanceWillBeDonParent}>
                      <div className={styles.serverMaintenanceWill1}>
                        Server Maintenance will be done on 16 Mar 2023 from 9AM
                        to 10AM
                      </div>
                      <div className={styles.itDepartment1}>IT Department</div>
                    </div>
                  </div>
                  <div className={styles.postedOn14Mar2023Container}>
                    <div className={styles.postedOn141}>
                      Posted on 14 Mar 2023
                    </div>
                  </div>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/line-2.svg"
                    />
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.serverMaintenanceWillBeDonGroup}>
                      <div className={styles.serverMaintenanceWill2}>
                        Server Maintenance will be done on 16 Mar 2023 from 9AM
                        to 10AM
                      </div>
                      <div className={styles.itDepartment2}>IT Department</div>
                    </div>
                  </div>
                  <div className={styles.postedOn14Mar2023Frame}>
                    <div className={styles.postedOn142}>
                      Posted on 14 Mar 2023
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.pendingBooksParent}>
                    <div className={styles.pendingBooks}>Pending Books</div>
                    <div className={styles.frameParent2}>
                      <div className={styles.rectangleContainer}>
                        <img
                          className={styles.rectangleIcon}
                          alt=""
                          src="/rectangle-16-1@2x.png"
                        />
                        <div className={styles.theDesignOfEverydayThingsParent}>
                          <div className={styles.theDesignOf}>
                            The Design of EveryDay Things
                          </div>
                          <div className={styles.donNorman1988}>
                            Don Norman, 1988
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper2}>
                        <div className={styles.frameParent3}>
                          <div className={styles.mar2023OverDueWrapper}>
                            <div className={styles.mar2023OverContainer}>
                              <span>{`13 Mar 2023 `}</span>
                              <span className={styles.overDue}>(Over Due)</span>
                            </div>
                          </div>
                          <div className={styles.groupDiv}>
                            <div className={styles.frameChild1} />
                            <div className={styles.return}>Return</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.rectangleParent1}>
                      <img
                        className={styles.frameChild2}
                        alt=""
                        src="/rectangle-16-11@2x.png"
                      />
                      <div className={styles.javaScriptScopeClosuresParent}>
                        <div
                          className={styles.javaScriptScope}
                        >{`Java Script Scope & Closures`}</div>
                        <div className={styles.kyleSimpson2014}>
                          Kyle Simpson, 2014
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.frameParent5}>
                        <div className={styles.mar2023OverDueContainer}>
                          <div className={styles.mar2023OverContainer1}>
                            <span>{`13 Mar 2023 `}</span>
                            <span className={styles.overDue1}>(Over Due)</span>
                          </div>
                        </div>
                        <div className={styles.rectangleParent2}>
                          <div className={styles.frameChild3} />
                          <div className={styles.return1}>Return</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild4} />
                  <div className={styles.requestedBooksWrapper}>
                    <div className={styles.requestedBooks}>Requested Books</div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameParent8}>
                        <div className={styles.rectangleParent4}>
                          <img
                            className={styles.frameChild5}
                            alt=""
                            src="/rectangle-16-1@2x.png"
                          />
                          <div className={styles.expectedBy15Container}>
                            <p className={styles.expectedBy}>Expected by</p>
                            <p className={styles.mar2023}>15 Mar 2023</p>
                          </div>
                        </div>
                        <div className={styles.frameParent9}>
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
                          <div className={styles.rectangleParent5}>
                            <div className={styles.frameChild6} />
                            <div className={styles.notYetAvailable}>
                              Not Yet Available
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameChild7} />
                    </div>
                    <div className={styles.rectangleParent6}>
                      <img
                        className={styles.frameChild8}
                        alt=""
                        src="/rectangle-16-11@2x.png"
                      />
                      <div className={styles.javaScriptScopeClosuresGroup}>
                        <div
                          className={styles.javaScriptScope1}
                        >{`Java Script Scope & Closures`}</div>
                        <div className={styles.kyleSimpson20141}>
                          Kyle Simpson, 2014
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameParent10}>
                      <div className={styles.returnedFromUserWrapper}>
                        <div className={styles.returnedFromUser}>
                          Returned From User
                        </div>
                      </div>
                      <div className={styles.rectangleParent7}>
                        <div className={styles.frameChild9} />
                        <div className={styles.availableNow}>Available Now</div>
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
        onHomeMenuContainerClick={onHomeMenuContainerClick}
        onSearchMenuContainerClick={onSearchMenuContainerClick}
        onFavouriteMenuContainerClick={onFavouriteMenuContainerClick}
      />
      <h1 className={styles.shelf}>Shelf</h1>
      <h1 className={styles.smart}>Smart</h1>
    </div>
  );
};

export default DELETEBOOK;
