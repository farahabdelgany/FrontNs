import { useCallback } from "react";
import Div from "../components/Div";
import { useNavigate } from "react-router-dom";
import styles from "./Borrow.module.css";

const Borrow = () => {
  const navigate = useNavigate();

  const onGroupButton1Click = useCallback(() => {
    navigate("/borrow-complete");
  }, [navigate]);

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
    navigate("/transcation-history");
  }, [navigate]);

  return (
    <div className={styles.borrow}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector1.svg" />
      <div className={styles.mainArea}>
        <div className={styles.bookDetails}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.bookDetailsParent}>
                <h1 className={styles.bookDetails1}>Book Details</h1>
                <div className={styles.publishedInParent}>
                  <div className={styles.publishedIn}>Published in</div>
                  <div className={styles.unitedStatesWrapper}>
                    <div className={styles.unitedStates}>United States</div>
                  </div>
                  <div className={styles.editionNotesParent}>
                    <div className={styles.editionNotes}>Edition Notes</div>
                    <div className={styles.frameGroup}>
                      <div className={styles.seriesParent}>
                        <div className={styles.series}>Series</div>
                        <div className={styles.genre}>Genre</div>
                      </div>
                      <div className={styles.doverLargePrintClassicsParent}>
                        <div className={styles.doverLargePrint}>
                          Dover large print classics
                        </div>
                        <div className={styles.fiction}>Fiction.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.classificationsParent}>
                  <div className={styles.classifications}>Classifications</div>
                  <div className={styles.frameContainer}>
                    <div className={styles.deweyDecimalClassParent}>
                      <div className={styles.deweyDecimalClass}>
                        Dewey Decimal Class
                      </div>
                      <div className={styles.libraryOfCongress}>
                        Library of Congress
                      </div>
                    </div>
                    <div className={styles.parent}>
                      <div className={styles.div}>823/.8</div>
                      <div className={styles.pr5485A12002}>PR5485 .A1 2002</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Div
              frameDivPadding="var(--padding-lg) var(--padding-15xl) var(--padding-9xl)"
              spanPadding="var(--padding-9xs) var(--padding-5xs) var(--padding-9xs) var(--padding-4xs)"
              propPadding="var(--padding-9xs) var(--padding-4xs) var(--padding-8xs)"
              propPadding1="var(--padding-9xs) var(--padding-5xs)"
              frameDivPadding1="var(--padding-9xs) var(--padding-4xs) var(--padding-8xs)"
              overhypedPadding="var(--padding-9xs) var(--padding-4xs) var(--padding-8xs)"
              shortPadding="var(--padding-9xs) var(--padding-4xs) var(--padding-8xs)"
              forgettablePadding="var(--padding-9xs) var(--padding-4xs) var(--padding-8xs)"
              propPadding2="var(--padding-9xs) var(--padding-5xs) var(--padding-9xs) var(--padding-4xs)"
              propPadding3="var(--padding-9xs) var(--padding-4xs) var(--padding-8xs)"
              propPadding4="var(--padding-9xs) var(--padding-6xs) var(--padding-9xs) var(--padding-4xs)"
              propWidth="79px"
              propDisplay="unset"
              propMinWidth="unset"
              propAlignSelf="stretch"
            />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.thePhysicalObjectParent}>
              <div className={styles.thePhysicalObject}>
                The Physical Object
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.paginationParent}>
                  <div className={styles.pagination}>Pagination</div>
                  <div className={styles.numberOfPages}>Number of pages</div>
                </div>
                <div className={styles.ix112PLargePrintParent}>
                  <div className={styles.ix112P}>
                    ix, 112 p. (large print) ;
                  </div>
                  <div className={styles.div1}>216</div>
                </div>
              </div>
            </div>
            <div className={styles.idNumbersParent}>
              <div className={styles.idNumbers}>ID Numbers</div>
              <div className={styles.frameParent2}>
                <div className={styles.myBookShelfParent}>
                  <div className={styles.myBookShelf}>My Book Shelf</div>
                  <div className={styles.isbn10}>ISBN 10</div>
                  <div className={styles.lccn}>LCCN</div>
                  <div className={styles.libraryThing}>Library Thing</div>
                  <div className={styles.goodreads}>Goodreads</div>
                </div>
                <div className={styles.ol3570252mParent}>
                  <div className={styles.ol3570252m}>OL3570252M</div>
                  <div className={styles.div2}>0486424715</div>
                  <div className={styles.div3}>2002073560</div>
                  <div className={styles.div4}>12349</div>
                  <div className={styles.div5}>690668</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainAreaInner}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <form className={styles.divParent}>
              <div className={styles.div6}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
                <h2 className={styles.buyThisBookContainer}>
                  <span className={styles.buyThisBookContainer1}>
                    <span className={styles.buy}>Buy</span>
                    <span className={styles.thisBookOnline}>
                      {" "}
                      this book Online
                    </span>
                  </span>
                </h2>
                <h3 className={styles.buyNow}>Buy Now</h3>
                <h3 className={styles.buyNow1}>Buy Now</h3>
                <div className={styles.whenYouBuyContainer}>
                  <span className={styles.whenYouBuyContainer1}>
                    {`When you buy books using these links the Internet Archive may earn a `}
                    <span className={styles.smallCommission}>
                      small commission
                    </span>
                    .
                  </span>
                </div>
              </div>
              <div className={styles.div7}>
                <div className={styles.div8}>
                  <div className={styles.publishDate}>Publish Date</div>
                  <div className={styles.errorCollector}>2000</div>
                </div>
                <div className={styles.div9}>
                  <div className={styles.publisher}>Publisher</div>
                  <div className={styles.newRidersPress}>New Riders Press</div>
                </div>
                <div className={styles.div10}>
                  <div className={styles.language}>Language</div>
                  <div className={styles.english}>English</div>
                </div>
                <div className={styles.div11}>
                  <div className={styles.pages}>Pages</div>
                  <div className={styles.div12}>216</div>
                </div>
              </div>
              <div className={styles.previewsAvailableInContainer}>
                <span className={styles.previewsAvailableInContainer1}>
                  <span
                    className={styles.previewsAvailableIn}
                  >{`Previews available in: `}</span>
                  <span className={styles.english1}>English</span>
                </span>
              </div>
              <div className={styles.div13}>
                <div className={styles.sinceDontMakeContainer}>
                  <span className={styles.sinceDontMakeContainer1}>
                    <span
                      className={styles.sinceDontMake}
                    >{`Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most...  `}</span>
                    <span className={styles.readMore}>Read more</span>
                  </span>
                </div>
              </div>
              <div className={styles.tab}>
                <button className={styles.a}>
                  <div className={styles.overview}>Overview</div>
                </button>
                <div className={styles.view166Editions}>View 166 Editions</div>
                <div className={styles.details}>Details</div>
                <div className={styles.kReviews}>4.1k Reviews</div>
                <div className={styles.lists}>Lists</div>
                <div className={styles.relatedBooks}>Related Books</div>
              </div>
              <h1 className={styles.dontMakeMe}>{`Don’t Make Me Think `}</h1>
              <div className={styles.bySteveKrugContainer}>
                {`By `}
                <span className={styles.steveKrug}>Steve Krug</span>, 2000
              </div>
              <h3 className={styles.secondEdition}>Second Edition</h3>
              <div className={styles.parallelProcessorManager}>
                <div className={styles.starsParent}>
                  <div className={styles.stars}>
                    <img
                      className={styles.starIcon}
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className={styles.starIcon1}
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className={styles.starIcon2}
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className={styles.starIcon3}
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className={styles.starIcon4}
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                  </div>
                  <div className={styles.ratings}>5.0 Ratings</div>
                </div>
                <div className={styles.currentlyReading}>
                  25 Currently reading
                </div>
                <div className={styles.haveRead}>119 Have read</div>
              </div>
              <b className={styles.availability}>Availability</b>
              <img
                className={styles.inputFilterIcon}
                loading="lazy"
                alt=""
                src="/vector-12.svg"
              />
              <h3 className={styles.hardCopy}>Hard Copy</h3>
              <img
                className={styles.inputFilterIcon1}
                loading="lazy"
                alt=""
                src="/vector-12.svg"
              />
              <h3 className={styles.eBook}>E - Book</h3>
              <img
                className={styles.inputFilterIcon2}
                loading="lazy"
                alt=""
                src="/vector-12.svg"
              />
              <h3 className={styles.audioBook}>Audio book</h3>
              <button className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.borrow1}>BORROW</div>
              </button>
              <div className={styles.outputNetwork}>
                <img
                  className={styles.errorCollectorTree}
                  loading="lazy"
                  alt=""
                  src="/rectangle-19@2x.png"
                />
                <div className={styles.a1}>
                  <img
                    className={styles.reviewssvgIcon}
                    loading="lazy"
                    alt=""
                    src="/reviewssvg.svg"
                  />
                  <b className={styles.review}>Review</b>
                </div>
                <div className={styles.a2}>
                  <img
                    className={styles.notessvgIcon}
                    loading="lazy"
                    alt=""
                    src="/notessvg.svg"
                  />
                  <b className={styles.notes}>Notes</b>
                </div>
                <div className={styles.a3}>
                  <img
                    className={styles.sharesvgIcon}
                    loading="lazy"
                    alt=""
                    src="/sharesvg1@2x.png"
                  />
                  <b className={styles.share}>Share</b>
                </div>
              </div>
              <div className={styles.dataWebParent}>
                <img
                  className={styles.dataWebIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-19-1@2x.png"
                />
                <h2 className={styles.aboutAuthor}>
                  <span className={styles.about}>About</span>
                  <span className={styles.author}> Author</span>
                </h2>
                <h2 className={styles.steveKrug1}>Steve Krug</h2>
                <h3 className={styles.otherBooks}>Other Books</h3>
                <div className={styles.steveKrugIs}>
                  Steve Krug is a usability consultant who has more than 30
                  years of experience as a user advocate for companies like
                  Apple, Netscape, AOL, Lexus, and others. Based in part on the
                  success of his first book, Don't Make Me Think, he has become
                  a highly sought-after speaker on usability design.
                </div>
                <div className={styles.outputHandlerTree}>
                  <img
                    className={styles.outputHandlerTreeChild}
                    alt=""
                    src="/rectangle-161@2x.png"
                  />
                </div>
                <div className={styles.outputHandlerTree1}>
                  <img
                    className={styles.outputHandlerTreeItem}
                    alt=""
                    src="/rectangle-162@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.heroiconsOutlinearrowSmall}
                loading="lazy"
                alt=""
                src="/heroiconsoutlinearrowsmallleft.svg"
              />
              <h3 className={styles.backToResults}>Back to results</h3>
              <div className={styles.topMain}>
                <div className={styles.outputHandlerGraph}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <img
                      className={styles.timeIcon}
                      loading="lazy"
                      alt=""
                      src="/time1.svg"
                    />
                    <div className={styles.hrs}>09:00 hrs</div>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector1.svg"
                    />
                    <div className={styles.mar2023}>4-Mar-2023</div>
                  </div>
                  <div className={styles.quickSearchBar}>
                    <div className={styles.quickSearchBarChild} />
                    <div className={styles.groupDiv}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.all}>All</div>
                      <img
                        className={styles.dataClusterIcon}
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
                    <div className={styles.dataAggregator} />
                    <h2 className={styles.search}>Search</h2>
                  </div>
                  <div className={styles.profileAccount}>
                    <div className={styles.profileAccountChild} />
                    <img
                      className={styles.logicGateIcon}
                      alt=""
                      src="/ellipse-10@2x.png"
                    />
                    <div className={styles.kenson}>Kenson</div>
                    <img
                      className={styles.profileAccountItem}
                      alt=""
                      src="/code-testing.svg"
                    />
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
                      className={styles.sorterIcon}
                      alt=""
                      src="/code-testing.svg"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.multiplier} />
              <div className={styles.statusParent}>
                <b className={styles.status}>Status</b>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <div className={styles.inShelf}>In-Shelf</div>
                </div>
                <img
                  className={styles.heroiconsMinimapPin}
                  alt=""
                  src="/heroiconsminimappin1@2x.png"
                />
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild2} />
                  <b className={styles.readNow}>Read Now</b>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-321.svg"
                  />
                </div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild3} />
                  <div className={styles.addToList}>Add to List</div>
                  <img
                    className={styles.polygonIcon}
                    alt=""
                    src="/polygon-1-3.svg"
                  />
                </div>
                <div className={styles.frameChild4} />
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild5} />
                  <b className={styles.divider}>2023</b>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
                <div className={styles.rectangleParent5}>
                  <div className={styles.frameChild6} />
                  <b className={styles.b}>03</b>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
                <div className={styles.rectangleParent6}>
                  <div className={styles.frameChild7} />
                  <b className={styles.b1}>08</b>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
                <button
                  className={styles.groupButton}
                  onClick={onGroupButton1Click}
                >
                  <div className={styles.frameChild8} />
                  <div className={styles.borrow2}>BORROW</div>
                </button>
                <div className={styles.frameWrapper1}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.frameChild9} />
                    <b className={styles.modulo}>2023</b>
                    <img
                      className={styles.negatorIcon}
                      alt=""
                      src="/vector-13.svg"
                    />
                  </div>
                </div>
                <div className={styles.rectangleParent8}>
                  <div className={styles.frameChild10} />
                  <b className={styles.b2}>03</b>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.rectangleParent9}>
                    <div className={styles.frameChild11} />
                    <b className={styles.b3}>04</b>
                    <img
                      className={styles.vectorIcon5}
                      alt=""
                      src="/vector-13.svg"
                    />
                  </div>
                </div>
                <h3 className={styles.from}>From</h3>
                <h2 className={styles.fillUpThe}>Fill Up the Details</h2>
                <div className={styles.rectangleParent10}>
                  <div className={styles.frameChild12} />
                  <img
                    className={styles.barcodeScannerIcon1}
                    alt=""
                    src="/barcode-scanner.svg"
                  />
                  <input
                    className={styles.enter6DigitSeriel}
                    placeholder="Enter6 Digit Seriel No. Or Scan"
                    type="text"
                  />
                </div>
                <h3 className={styles.bookSerielNo}>Book Seriel No.</h3>
                <textarea
                  className={styles.groupTextarea}
                  placeholder="Purpose "
                  rows={5}
                  cols={18}
                />
                <h3 className={styles.description}>Description</h3>
                <h3 className={styles.to}>To</h3>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.sideBarFrame}>
        <div className={styles.sideBar}>
          <div className={styles.homeMenu} onClick={onHomeMenuContainerClick}>
            <div className={styles.delayedSummer}>
              <img
                className={styles.heroiconsMinihome}
                loading="lazy"
                alt=""
                src="/heroiconsminihome1.svg"
              />
            </div>
            <h2 className={styles.home}>Home</h2>
          </div>
          <div className={styles.sineWaveGenerator}>
            <div className={styles.cosineWaveGenerator}>
              <div
                className={styles.searchMenu}
                onClick={onSearchMenuContainerClick}
              >
                <div className={styles.sawtoothWaveGenerator}>
                  <img
                    className={styles.searchIcon1}
                    loading="lazy"
                    alt=""
                    src="/search1.svg"
                  />
                </div>
                <h2 className={styles.search1}>Search</h2>
              </div>
              <div className={styles.frequencyModifier}>
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
                  <h2 className={styles.myShelf}>My Shelf</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.spectrumAnalyzer}>
            <div className={styles.signalVisualizer}>
              <h3 className={styles.about1}>{`About `}</h3>
              <h3 className={styles.support}>Support</h3>
              <h3 className={styles.termsCondition}>{`Terms & Condition`}</h3>
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
  );
};

export default Borrow;
