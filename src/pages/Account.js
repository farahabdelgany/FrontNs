import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent6";
import SideBarFrame from "../components/SideBarFrame";
import styles from "./Account.module.css";
import stylesNav from "./AccountPrivacy.module.css";

const Account = () => {
  const navigate = useNavigate();

  const onHomeMenuContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSearchMenuContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onMyShelfMenuClick = useCallback(() => {
    navigate("/my-shelf");
  }, [navigate]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    navigate("/-all-transcation");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/home-admin");
  }, [navigate]);
  const onProfileAccountContainerClick = useCallback(() => {
    navigate("/homeprofile");
  }, [navigate]);

  return (
    <div className={styles.account}>
      <header className={stylesNav.quickSearchBarParent}>
          <div className={stylesNav.quickSearchBar}>
            <div className={stylesNav.quickSearchBarChild} />
            <div className={stylesNav.frameParent}>
              <div className={stylesNav.rectangleParent}>
                <div className={stylesNav.frameChild} />
                <div className={stylesNav.all}>All</div>
                <div className={stylesNav.polygonWrapper}>
                  <img
                    className={stylesNav.frameItem}
                    alt=""
                    src="/code-testing.svg"
                  />
                </div>
              </div>
              <div className={stylesNav.searchWrapper}>
                <h3 className={stylesNav.search1}>Search</h3>
              </div>
            </div>
            <div className={stylesNav.quickSearchBarInner}>
              <div className={stylesNav.frameGroup}>
                <div className={stylesNav.searchContainer}>
                  <img
                    className={stylesNav.searchIcon1}
                    alt=""
                    src="/search.svg"
                  />
                </div>
                <div className={stylesNav.frameInner} />
                <div className={stylesNav.barcodeScannerWrapper}>
                  <img
                    className={stylesNav.barcodeScannerIcon}
                    loading="lazy"
                    alt=""
                    src="/barcode-scanner.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className={stylesNav.lang}>
            <div className={stylesNav.langChild} />
            <div className={stylesNav.translateWrapper}>
              <img
                className={stylesNav.translateIcon}
                alt=""
                src="/translate.svg"
              />
            </div>
            <div className={stylesNav.langWrapper}>
              <div className={stylesNav.lang1}>Lang</div>
            </div>
            <div className={stylesNav.langInner}>
              <img
                className={stylesNav.polygonIcon}
                alt=""
                src="/code-testing.svg"
              />
            </div>
          </button>
          <div className={stylesNav.rectangleGroup}>
            <div className={stylesNav.rectangleDiv} />
            <div className={stylesNav.timeParent}>
              <img
                className={stylesNav.timeIcon}
                loading="lazy"
                alt=""
                src="/time.svg"
              />
              <div className={stylesNav.am}>09:00 AM</div>
            </div>
            <div className={stylesNav.vectorParent}>
              <img
                className={stylesNav.vectorIcon}
                alt=""
                src="/import-export-manager.svg"
              />
              <div className={stylesNav.mar2023}>4-Mar-2023</div>
            </div>
          </div>
          <div
            className={stylesNav.profileAccount}
            onClick={onProfileAccountContainerClick}
          >
            <div className={stylesNav.profileAccountChild} />
            <div className={stylesNav.profileAccountInner}>
              <img
                className={stylesNav.ellipseIcon}
                alt=""
                src="/ellipse-10@2x.png"
              />
            </div>
            <div className={stylesNav.kensonWrapper}>
              <div className={stylesNav.kenson}>Kenson</div>
            </div>
            <div className={stylesNav.frameDiv}>
              <img
                className={stylesNav.frameChild1}
                alt=""
                src="/code-testing.svg"
              />
            </div>
          </div>
        </header>
      <div className={styles.bgVectorParent}>

        <img className={styles.bgVectorIcon} alt="" src="/bg-vector1.svg" />
        <div className={styles.mainArea}>
          <div className={styles.mainAreaChild} />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.functionBuilder}>
              <div className={styles.dataReader}>
                <div className={styles.functionRunner}>
                  <div className={styles.inputValidator}>
                    <div className={styles.errorProcessor}>
                      <div className={styles.dataWriter}>
                        <b className={styles.accountSetting}>Account Setting</b>
                      </div>
                      <div className={styles.loopIterator} />
                    </div>
                    <div className={styles.statementExecutor}>
                      <div className={styles.yourProfilePicture}>
                        Your Profile Picture
                      </div>
                      <div className={styles.subroutineRunner}>
                        <div className={styles.wrapperGroup3}>
                          <img
                            className={styles.wrapperGroup3Child}
                            loading="lazy"
                            alt=""
                            src="/group-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.errorLogger}>
                      <div className={styles.uploadNewPhoto}>
                        Upload New photo
                      </div>
                    </div>
                  </div>
                  <div className={styles.conditionalGuard}>
                    <div className={styles.dataSorter}>
                      <div className={styles.functionTerminator}>
                        <div className={styles.statementOrganizer}>
                          <div className={styles.loopInitializer}>
                            <div
                              className={styles.loginSecurity}
                            >{`Login & Security`}</div>
                          </div>
                          <div className={styles.outputProcessor} />
                        </div>
                        <div className={styles.statementOrganizer1}>
                          <div className={styles.notificationsWrapper}>
                            <div className={styles.notifications}>
                              Notifications
                            </div>
                          </div>
                          <div className={styles.statementOrganizerChild} />
                        </div>
                        <div className={styles.statementOrganizer2}>
                          <div className={styles.interfaceWrapper}>
                            <div className={styles.interface}>Interface</div>
                          </div>
                          <div className={styles.statementOrganizerItem} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.valueSplitter}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameItem} />
                        <div className={styles.errorPropagator}>
                          <img
                            className={styles.errorPropagatorChild}
                            loading="lazy"
                            alt=""
                            src="/group-133536.svg"
                          />
                          <div className={styles.dataContainer}>
                            <div className={styles.loopIncrementer}>120</div>
                          </div>
                        </div>
                        <div className={styles.inputFilterChain}>
                          <h2 className={styles.readings}>Readings</h2>
                        </div>
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameInner} />
                        <div className={styles.errorCollector}>
                          <button className={styles.groupButton}>
                            <div className={styles.rectangleDiv} />
                            <img
                              className={styles.giveGiftIcon}
                              alt=""
                              src="/give-gift-1.svg"
                            />
                          </button>
                          <div className={styles.wrapper}>
                            <div className={styles.div}>10</div>
                          </div>
                        </div>
                        <div className={styles.inputProcessor}>
                          <h2 className={styles.contribution}>Contribution</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wrapperEditDashboard}>
                <img
                  className={styles.editDashboardIcon}
                  alt=""
                  src="/edit-dashboard.svg"
                />
              </div>
            </div>
            <div className={styles.nestedLoopWrapper}>
              <div className={styles.nestedLoop}>
                <GroupComponent
                  fullName="Full name"
                  reinhardKenson="Reinhard Kenson"
                />
                <div className={styles.valueTransformer}>
                  <div className={styles.controlFlow}>
                    <div className={styles.collegeEmailId}>
                      College Email ID
                    </div>
                  </div>
                  <div className={styles.iterativeStructure}>
                    <div className={styles.iterativeStructureChild} />
                    <input
                      className={styles.kensoncsofficialcollegecom}
                      placeholder="Kensoncs.official@college.com"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerParent}>
              <div className={styles.container}>
                <div className={styles.instanceParent}>
                  <GroupComponent
                    fullName="Register Number"
                    reinhardKenson="6022020"
                    propMinWidth="129px"
                    propMinWidth1="62px"
                  />
                  <div className={styles.eventDispatcher}>
                    <div className={styles.messageHandler}>
                      <div className={styles.phoneNumber}>phone number</div>
                    </div>
                    <div className={styles.priorityQueue}>
                      <div className={styles.priorityQueueChild} />
                      <div className={styles.stack}>
                        <div className={styles.heap}>
                          <div className={styles.tree}>+91</div>
                        </div>
                        <div className={styles.graph} />
                      </div>
                      <input
                        className={styles.matrix}
                        placeholder="9952508995"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.bio}>Bio</div>
              </div>
              <div className={styles.list}>
                <div className={styles.listChild} />
                <div className={styles.imAStudent}>{`I’m a Student `}</div>
              </div>
            </div>
            <div className={styles.dictionary}>
              <div className={styles.map}>
                <button className={styles.button} onClick={onButtonClick}>
                  <div className={styles.buttonChild} />
                  <b className={styles.updateProfile}>Update Profile</b>
                </button>
                <div className={styles.resetWrapper}>
                  <div className={styles.reset}>Reset</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideBarFrame
          bookshelf="/bookshelf.svg"
          giveGift="/give-gift.svg"
          propColor="#8a8a8a"
          propColor1="#8a8a8a"
          sideBarFrameTop="-56px"
          sideBarFrameLeft="-297px"
          sideBarFrameMargin="0 !important"
          sideBarFrameBottom="unset"
          onHomeMenuContainerClick={onHomeMenuContainerClick}
          onSearchMenuContainerClick={onSearchMenuContainerClick}
          onMyShelfMenuClick={onMyShelfMenuClick}
          onFavouriteMenuContainerClick={onFavouriteMenuContainerClick}
        />
        <h1 className={styles.shelf}>Shelf</h1>
        <h1 className={styles.smart}>Smart</h1>
      </div>
    </div>
  );
};

export default Account;
