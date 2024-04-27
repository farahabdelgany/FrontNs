import { useCallback } from "react";
import Div from "../components/Div";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import styles from "./BorrowComplete.module.css";

const BorrowComplete = () => {
  const navigate = useNavigate();

  const onGroupButton1Click = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    navigate("/transcation-history");
  }, [navigate]);

  return (
    <div className={styles.borrowComplete}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector1.svg" />
      <div className={styles.mainArea}>
        <div className={styles.bookDetails}>
          <footer className={styles.frameParent}>
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
            <Div />
          </footer>
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
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.topMainParent}>
            <div className={styles.topMain}>
              <div className={styles.quickSearchBarParent}>
                <div className={styles.quickSearchBar}>
                  <div className={styles.quickSearchBarChild} />
                  <div className={styles.frameParent3}>
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
                    <div className={styles.searchWrapper}>
                      <h2 className={styles.search}>Search</h2>
                    </div>
                  </div>
                  <div className={styles.quickSearchBarInner}>
                    <div className={styles.frameParent4}>
                      <div className={styles.searchContainer}>
                        <img
                          className={styles.searchIcon}
                          loading="lazy"
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
                    <div className={styles.timeParent}>
                      <img
                        className={styles.timeIcon}
                        loading="lazy"
                        alt=""
                        src="/time1.svg"
                      />
                      <div className={styles.hrs}>09:00 hrs</div>
                    </div>
                    <div className={styles.vectorParent}>
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
                  <div className={styles.profileAccountInner1}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/code-testing.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent5}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.heroiconsOutlinearrowSmallParent}>
                      <img
                        className={styles.heroiconsOutlinearrowSmall}
                        loading="lazy"
                        alt=""
                        src="/heroiconsoutlinearrowsmallleft.svg"
                      />
                      <h3 className={styles.backToResults}>Back to results</h3>
                    </div>
                    <div className={styles.rectangleParent1}>
                      <img
                        className={styles.rectangleIcon}
                        loading="lazy"
                        alt=""
                        src="/rectangle-19@2x.png"
                      />
                      <div className={styles.frameWrapper3}>
                        <div className={styles.aParent}>
                          <div className={styles.a}>
                            <div className={styles.reviewssvgWrapper}>
                              <img
                                className={styles.reviewssvgIcon}
                                loading="lazy"
                                alt=""
                                src="/reviewssvg.svg"
                              />
                            </div>
                            <b className={styles.review}>Review</b>
                          </div>
                          <div className={styles.a1}>
                            <img
                              className={styles.notessvgIcon}
                              loading="lazy"
                              alt=""
                              src="/notessvg.svg"
                            />
                            <b className={styles.notes}>Notes</b>
                          </div>
                          <div className={styles.a2}>
                            <img
                              className={styles.sharesvgIcon}
                              loading="lazy"
                              alt=""
                              src="/sharesvg@2x.png"
                            />
                            <b className={styles.share}>Share</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.div6}>
                    <div className={styles.buyThisBookOnlineParent}>
                      <h2 className={styles.buyThisBookContainer}>
                        <span>
                          <span>Buy</span>
                          <span className={styles.thisBookOnline}>
                            {" "}
                            this book Online
                          </span>
                        </span>
                      </h2>
                      <div className={styles.image3Parent}>
                        <img
                          className={styles.image3Icon}
                          loading="lazy"
                          alt=""
                          src="/image-3@2x.png"
                        />
                        <div className={styles.buyNowWrapper}>
                          <h3 className={styles.buyNow}>Buy Now</h3>
                        </div>
                      </div>
                      <div className={styles.frameWrapper4}>
                        <div className={styles.image2Parent}>
                          <img
                            className={styles.image2Icon}
                            loading="lazy"
                            alt=""
                            src="/image-2@2x.png"
                          />
                          <div className={styles.buyNowContainer}>
                            <h3 className={styles.buyNow1}>Buy Now</h3>
                          </div>
                        </div>
                      </div>
                    </div>
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
                </div>
                <div className={styles.frameWrapper5}>
                  <div className={styles.previewsAvailableInEnglishParent}>
                    <div className={styles.previewsAvailableInContainer}>
                      <span>{`Previews available in: `}</span>
                      <span className={styles.english}>English</span>
                    </div>
                    <h1
                      className={styles.dontMakeMe}
                    >{`Don’t Make Me Think `}</h1>
                    <div className={styles.bySteveKrugContainer}>
                      {`By `}
                      <span className={styles.steveKrug}>Steve Krug</span>, 2000
                    </div>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameParent9}>
                        <div className={styles.frameWrapper6}>
                          <div className={styles.frameParent10}>
                            <div className={styles.secondEditionParent}>
                              <h3 className={styles.secondEdition}>
                                Second Edition
                              </h3>
                              <div className={styles.frameParent11}>
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
                                      alt=""
                                      src="/star@2x.png"
                                    />
                                  </div>
                                  <div className={styles.ratings}>
                                    5.0 Ratings
                                  </div>
                                </div>
                                <div className={styles.currentlyReading}>
                                  25 Currently reading
                                </div>
                                <div className={styles.haveRead}>
                                  119 Have read
                                </div>
                              </div>
                            </div>
                            <div className={styles.availabilityParent}>
                              <b className={styles.availability}>
                                Availability
                              </b>
                              <div className={styles.frameParent12}>
                                <div className={styles.vectorWrapper}>
                                  <img
                                    className={styles.vectorIcon1}
                                    loading="lazy"
                                    alt=""
                                    src="/vector-12.svg"
                                  />
                                </div>
                                <h3 className={styles.hardCopy}>Hard Copy</h3>
                              </div>
                              <div className={styles.frameParent13}>
                                <div className={styles.vectorContainer}>
                                  <img
                                    className={styles.vectorIcon2}
                                    loading="lazy"
                                    alt=""
                                    src="/vector-12.svg"
                                  />
                                </div>
                                <h3 className={styles.eBook}>E - Book</h3>
                              </div>
                              <div className={styles.frameParent14}>
                                <div className={styles.vectorFrame}>
                                  <img
                                    className={styles.vectorIcon3}
                                    loading="lazy"
                                    alt=""
                                    src="/vector-12.svg"
                                  />
                                </div>
                                <h3 className={styles.audioBook}>Audio book</h3>
                              </div>
                            </div>
                            <button className={styles.groupButton}>
                              <div className={styles.frameChild2} />
                              <div className={styles.borrow}>BORROW</div>
                            </button>
                          </div>
                        </div>
                        <div className={styles.frameParent15}>
                          <div className={styles.frameParent16}>
                            <div className={styles.frameParent17}>
                              <div className={styles.aboutAuthorParent}>
                                <h2 className={styles.aboutAuthor}>
                                  <span>About</span>
                                  <span className={styles.author}> Author</span>
                                </h2>
                                <h2 className={styles.steveKrug1}>
                                  Steve Krug
                                </h2>
                              </div>
                              <div className={styles.rectangleWrapper}>
                                <img
                                  className={styles.frameChild3}
                                  loading="lazy"
                                  alt=""
                                  src="/rectangle-19-1@2x.png"
                                />
                              </div>
                            </div>
                            <div className={styles.steveKrugIs}>
                              Steve Krug is a usability consultant who has more
                              than 30 years of experience as a user advocate for
                              companies like Apple, Netscape, AOL, Lexus, and
                              others. Based in part on the success of his first
                              book, Don't Make Me Think, he has become a highly
                              sought-after speaker on usability design.
                            </div>
                          </div>
                          <div className={styles.dataAggregator}>
                            <h3 className={styles.otherBooks}>Other Books</h3>
                            <div className={styles.inputFilter}>
                              <div className={styles.outputCombiner}>
                                <img
                                  className={styles.outputCombinerChild}
                                  alt=""
                                  src="/rectangle-161@2x.png"
                                />
                              </div>
                              <div className={styles.outputCombiner1}>
                                <img
                                  className={styles.outputCombinerItem}
                                  alt=""
                                  src="/rectangle-162@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tabParent}>
                        <div className={styles.tab}>
                          <button className={styles.a3}>
                            <div className={styles.overview}>Overview</div>
                          </button>
                          <div className={styles.conditionChecker}>
                            <div className={styles.view166Editions}>
                              View 166 Editions
                            </div>
                          </div>
                          <div className={styles.conditionChecker1}>
                            <div className={styles.details}>Details</div>
                          </div>
                          <div className={styles.conditionChecker2}>
                            <div className={styles.kReviews}>4.1k Reviews</div>
                          </div>
                          <div className={styles.conditionChecker3}>
                            <div className={styles.lists}>Lists</div>
                          </div>
                          <div className={styles.conditionChecker4}>
                            <div className={styles.relatedBooks}>
                              Related Books
                            </div>
                          </div>
                        </div>
                        <div className={styles.div7}>
                          <div className={styles.div8}>
                            <div className={styles.publishDate}>
                              Publish Date
                            </div>
                            <div className={styles.wrapper}>
                              <div className={styles.div9}>2000</div>
                            </div>
                          </div>
                          <div className={styles.div10}>
                            <div className={styles.publisherWrapper}>
                              <div className={styles.publisher}>Publisher</div>
                            </div>
                            <div className={styles.newRidersPress}>
                              New Riders Press
                            </div>
                          </div>
                          <div className={styles.div11}>
                            <div className={styles.language}>Language</div>
                            <div className={styles.englishWrapper}>
                              <div className={styles.english1}>English</div>
                            </div>
                          </div>
                          <div className={styles.div12}>
                            <div className={styles.pages}>Pages</div>
                            <div className={styles.container}>
                              <div className={styles.div13}>216</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.div14}>
                        <div className={styles.sinceDontMakeContainer}>
                          <span>
                            <span
                              className={styles.sinceDontMake}
                            >{`Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most...  `}</span>
                            <span className={styles.readMore}>Read more</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.statusParent}>
                      <b className={styles.status}>Status</b>
                      <div className={styles.groupDiv}>
                        <div className={styles.frameChild4} />
                        <div className={styles.inShelf}>In-Shelf</div>
                      </div>
                      <img
                        className={styles.heroiconsMinimapPin}
                        alt=""
                        src="/heroiconsminimappin1@2x.png"
                      />
                      <div className={styles.rectangleParent2}>
                        <div className={styles.frameChild5} />
                        <b className={styles.readNow}>Read Now</b>
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="/group-321.svg"
                        />
                      </div>
                      <div className={styles.rectangleParent3}>
                        <div className={styles.frameChild6} />
                        <div className={styles.addToList}>Add to List</div>
                        <img
                          className={styles.frameChild7}
                          alt=""
                          src="/polygon-1-3.svg"
                        />
                      </div>
                      <div className={styles.frameChild8} />
                      <div className={styles.processCompletedParent}>
                        <h1 className={styles.processCompleted}>
                          Process Completed
                        </h1>
                        <div className={styles.vectorWrapper1}>
                          <img
                            className={styles.vectorIcon4}
                            loading="lazy"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameWrapper7}>
                        <button
                          className={styles.rectangleParent4}
                          onClick={onGroupButton1Click}
                        >
                          <div className={styles.frameChild9} />
                          <div className={styles.back}>{`Back `}</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameChild10} />
          </div>
        </div>
      </div>
      <div className={styles.sideBarFrame}>
        <SideBar />
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

export default BorrowComplete;
