import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TranscationHistory.module.css";

const TranscationHistory = () => {
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

  return (
    <div className={styles.transcationHistory}>
       <div className={styles.statusConfirmed}>
      <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
      <div className={styles.amountWrapper}>
        <div className={styles.amount}>
          <div className={styles.tabbar}>
            <div className={styles.filterSelectors}>
              <div className={styles.today}>This week</div>
            </div>
          </div>
          <div className={styles.yourQR}>
            <div className={styles.transaction1}>
              <div className={styles.transactionCardBg} />
              <div className={styles.bordertop}>
                <img
                  className={styles.transactionTypesIcons}
                  alt=""
                  src="/transaction-types-icons.svg"
                />
              </div>
              <div className={styles.nA}>
                <b className={styles.transactionName}>Currency exchange</b>
                <div className={styles.nA1}>
                  <div className={styles.transactionId}>Transaction ID</div>
                  <div className={styles.nA2}>698094554317</div>
                </div>
              </div>
              <div className={styles.transactionTime}>
                <b className={styles.amount1}>$ 350.00</b>
                <div className={styles.transactionStatuses}>
                  <div className={styles.statusPending}>
                    <div className={styles.yourQRTab} />
                    <b className={styles.pending}>pending</b>
                  </div>
                </div>
                <div className={styles.borderedTop}>
                  <div className={styles.transactionDate}>17 Sep 2023</div>
                  <div className={styles.transactionTime1}>11:21 AM</div>
                </div>
              </div>
            </div>
            <div className={styles.transaction2}>
              <div className={styles.transactionCardBg1} />
              <img
                className={styles.transactionTypesIcons1}
                alt=""
                src="/transaction-types-icons1@2x.png"
              />
              <div className={styles.frameParent}>
                <div className={styles.transactionNameParent}>
                  <b className={styles.transactionName1}>{`Cash-in `}</b>
                  <div className={styles.secondaryTransactionName}>
                    From ABC Bank ATM
                  </div>
                  <div className={styles.nA3}>
                    <div className={styles.transactionId1}>Transaction ID</div>
                    <div className={styles.nA4}>564925374920</div>
                  </div>
                </div>
                <div className={styles.amountParent}>
                  <b className={styles.amount2}>$ 100.00</b>
                  <div className={styles.transactionStatuses1}>
                    <div className={styles.statusConfirmed1}>
                      <div className={styles.nA5} />
                      <b className={styles.confirmed}>confirmed</b>
                    </div>
                  </div>
                  <div className={styles.nA6}>
                    <div className={styles.transactionDate1}>17 Sep 2023</div>
                    <div className={styles.transactionTime2}>10:34 AM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.transaction3}>
              <div className={styles.transactionCardBg2} />
              <img
                className={styles.transactionTypesIcons2}
                alt=""
                src="/transaction-types-icons2.svg"
              />
              <div className={styles.frameGroup}>
                <div className={styles.transactionNameGroup}>
                  <b className={styles.transactionName2}>
                    Cashback from purchase
                  </b>
                  <b className={styles.amount3}>$ 1.75</b>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.secondaryTransactionNameParent}>
                    <div className={styles.secondaryTransactionName1}>
                      Purchase from Amazon.com
                    </div>
                    <div className={styles.transactionId2}>Transaction ID</div>
                    <div className={styles.nA7}>685746354219</div>
                  </div>
                  <div className={styles.transactionStatusesParent}>
                    <div className={styles.transactionStatuses2}>
                      <div className={styles.statusConfirmed2}>
                        <div className={styles.nA8} />
                        <b className={styles.confirmed1}>confirmed</b>
                      </div>
                    </div>
                    <div className={styles.nA9}>
                      <div className={styles.transactionDate2}>16 Sep 2023</div>
                      <div className={styles.transactionTime3}>16:08 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.transaction4}>
              <div className={styles.transactionCardBg3} />
              <div className={styles.transactionTypesIconsParent}>
                <img
                  className={styles.transactionTypesIcons3}
                  alt=""
                  src="/transaction-types-icons3@2x.png"
                />
                <div className={styles.tabs}>
                  <b className={styles.transactionName3}>Transfer to card</b>
                  <div className={styles.nA10}>
                    <div className={styles.transactionId3}>Transaction ID</div>
                    <div className={styles.nA11}>698094554317</div>
                  </div>
                </div>
              </div>
              <div className={styles.amountGroup}>
                <b className={styles.amount4}>$ 9000.00</b>
                <div className={styles.transactionStatuses3}>
                  <div className={styles.statusConfirmed3}>
                    <div className={styles.statusConfirmedChild} />
                    <b className={styles.confirmed2}>confirmed</b>
                  </div>
                </div>
                <div className={styles.nA12}>
                  <div className={styles.transactionDate3}>16 Sep 2023</div>
                  <div className={styles.transactionTime4}>11:21 AM</div>
                </div>
              </div>
            </div>
            <div className={styles.transaction5}>
              <div className={styles.transactionCardBg4} />
              <div className={styles.transactionTypesIconsGroup}>
                <img
                  className={styles.transactionTypesIcons4}
                  alt=""
                  src="/transaction-types-icons3@2x.png"
                />
                <div className={styles.transactionNameContainer}>
                  <b className={styles.transactionName4}>Transfer to card</b>
                  <div className={styles.secondaryTransactionName2}>
                    Not enough funds
                  </div>
                  <div className={styles.nA13}>
                    <div className={styles.transactionId4}>Transaction ID</div>
                    <div className={styles.nA14}>097967542786</div>
                  </div>
                </div>
              </div>
              <div className={styles.amountContainer}>
                <b className={styles.amount5}>$ 9267.00</b>
                <div className={styles.transactionStatuses4}>
                  <div className={styles.statusDeclined}>
                    <div className={styles.statusDeclinedChild} />
                    <b className={styles.canceled}>canceled</b>
                  </div>
                </div>
                <div className={styles.transactionDateParent}>
                  <div className={styles.transactionDate4}>15 Sep 2023</div>
                  <div className={styles.transactionTime5}>10:11 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tabBar}>
        <div className={styles.tabBarShadow} />
        <div className={styles.blurredBg} />
        <div className={styles.tabs1}>
          <div className={styles.homeUnselected}>
            <div className={styles.homeBg} />
            <div className={styles.moreUnselected}>
              <img className={styles.homeIcon} alt="" src="/home-icon.svg" />
            </div>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.transfersSelected}>
            <div className={styles.transfersBg} />
            <div className={styles.transfersIconWrapper}>
              <img
                className={styles.transfersIcon}
                alt=""
                src="/transfers-icon.svg"
              />
            </div>
            <div className={styles.transactions}>Transactions</div>
          </div>
          <div className={styles.yourQrUnselected}>
            <div className={styles.yourQrBg} />
            <div className={styles.qrIconWrapper}>
              <img className={styles.qrIcon} alt="" src="/qr-icon.svg" />
            </div>
            <div className={styles.yourQr}>Your QR</div>
          </div>
          <div className={styles.moreUnselected1}>
            <div className={styles.moreBg} />
            <div className={styles.moreIconWrapper}>
              <img className={styles.moreIcon} alt="" src="/more-icon.svg" />
            </div>
            <div className={styles.more}>More</div>
          </div>
        </div>
        <div className={styles.borderTop} />
      </div>
      <div className={styles.iphoneWithNotch}>
        <div className={styles.leftArea}>
          <img className={styles.backArrowIcon} alt="" src="/back-arrow.svg" />
          <div className={styles.search}>Search</div>
          <div className={styles.time}>
            <div className={styles.div}>9:41</div>
            <img
              className={styles.locationServicesActiveWit}
              alt=""
              src="/location-services--active-with-condition.svg"
            />
          </div>
        </div>
        <div className={styles.notchArea} />
        <div className={styles.rightArea}>
          <div className={styles.statusArea}>
            <div className={styles.autoLayout}>
              <div className={styles.sim1SingleSim}>
                <div className={styles.bar4} />
                <div className={styles.bar3} />
                <div className={styles.bar2} />
                <div className={styles.bar1} />
              </div>
              <img
                className={styles.networkWifiFull}
                alt=""
                src="/network--wifi-full.svg"
              />
              <img
                className={styles.batteryFullUncharged}
                alt=""
                src="/battery--full-uncharged@2x.png"
              />
            </div>
          </div>
          <img className={styles.privacyIndicatorNone} alt="" />
        </div>
      </div>
    </div>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector1.svg" />
      <header className={styles.fRAME}>
        <div className={styles.fRAMEInner}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameParent}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.all}>All</div>
                <div className={styles.fRAME1}>
                  <img
                    className={styles.fRAMEChild}
                    loading="lazy"
                    alt=""
                    src="/polygon-1.svg"
                  />
                </div>
              </div>
              <div className={styles.fRAME2}>
                <div className={styles.search}>Search</div>
              </div>
            </div>
            <div className={styles.fRAME3}>
              <div className={styles.fRAME4}>
                <div className={styles.fRAME5}>
                  <img
                    className={styles.searchIcon}
                    loading="lazy"
                    alt=""
                    src="/search2.svg"
                  />
                </div>
                <div className={styles.lINE} />
                <div className={styles.fRAME6}>
                  <img
                    className={styles.barcodeScannerIcon}
                    loading="lazy"
                    alt=""
                    src="/barcode-scanner1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.lang}>
          <div className={styles.langChild} />
          <div className={styles.fRAME7}>
            <img className={styles.translateIcon} alt="" src="/translate.svg" />
          </div>
          <div className={styles.gROUP}>
            <div className={styles.lang1}>Lang</div>
          </div>
          <div className={styles.pOLYGON}>
            <img className={styles.fRAME8} alt="" src="/code-testing.svg" />
          </div>
        </button>
        <div className={styles.fRAME9}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.fRAME10}>
              <img
                className={styles.timeIcon}
                loading="lazy"
                alt=""
                src="/time1.svg"
              />
              <div className={styles.hrs}>09:00 hrs</div>
            </div>
            <div className={styles.fRAME11}>
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
        <div className={styles.fRAME12}>
          <div className={styles.profileAccount}>
            <div className={styles.profileAccountChild} />
            <div className={styles.fRAME13}>
              <img className={styles.tEXT} alt="" src="/ellipse-10@2x.png" />
            </div>
            <div className={styles.fRAME14}>
              <div className={styles.kenson}>Kenson</div>
            </div>
            <div className={styles.fRAME15}>
              <img className={styles.tEXT1} alt="" src="/code-testing.svg" />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.sideBar}>
        <div className={styles.sideBar1}>
          <div className={styles.homeMenu} onClick={onHomeMenuContainerClick}>
            <div className={styles.iCON}>
              <img
                className={styles.heroiconsMinihome}
                loading="lazy"
                alt=""
                src="/heroiconsminihome1.svg"
              />
            </div>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.iNSTANCE}>
            <div className={styles.fRAME16}>
              <div
                className={styles.searchMenu}
                onClick={onSearchMenuContainerClick}
              >
                <div className={styles.gROUP1}>
                  <img
                    className={styles.searchIcon1}
                    alt=""
                    src="/search-1.svg"
                  />
                </div>
                <div className={styles.search1}>Search</div>
              </div>
              <div className={styles.tEXT2}>
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
          <div className={styles.supportTermsCondition}>
            <div className={styles.aboutParent}>
              <div className={styles.about}>{`About `}</div>
              <div className={styles.support}>Support</div>
              <div className={styles.termsCondition}>{`Terms & Condition`}</div>
            </div>
          </div>
        </div>
        <div className={styles.favouriteMenu}>
          <img className={styles.giveGiftIcon} alt="" src="/give-gift1.svg" />
          <div className={styles.contribute}>Contribute</div>
        </div>
      </div>
      <h1 className={styles.shelf}>Shelf</h1>
      <h1 className={styles.smart}>Smart</h1>
     
    </div>
    
  );
};

export default TranscationHistory;
