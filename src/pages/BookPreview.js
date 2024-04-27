import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookPreview.module.css";

const BookPreview = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/borrow");
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
    <div className={styles.bookPreview}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector1.svg" />
      <div className={styles.mainArea}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
          </div>
          <div className={styles.topMain}>
            <div className={styles.quickSearchBarParent}>
              <div className={styles.quickSearchBar}>
                <div className={styles.quickSearchBarChild} />
                <div className={styles.frameGroup}>
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
                  <div className={styles.frameContainer}>
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
              <div className={styles.frameWrapper}>
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
                      className={styles.vectorIcon3}
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
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameChild1}
                    alt=""
                    src="/code-testing.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.frameParent4}>
                      <div className={styles.heroiconsOutlinearrowSmallParent}>
                        <img
                          className={styles.heroiconsOutlinearrowSmall}
                          loading="lazy"
                          alt=""
                          src="/heroiconsoutlinearrowsmallleft.svg"
                        />
                        <h3 className={styles.backToResults}>
                          Back to results
                        </h3>
                      </div>
                      <div className={styles.dataAggregator}>
                        <img
                          className={styles.inputFilterIcon}
                          loading="lazy"
                          alt=""
                          src="/rectangle-19@2x.png"
                        />
                        <div className={styles.outputProcessor}>
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
                    <div className={styles.frameWrapper3}>
                      <div className={styles.frameParent5}>
                        <div className={styles.dontMakeMeThinkWrapper}>
                          <h1
                            className={styles.dontMakeMe}
                          >{`Don’t Make Me Think `}</h1>
                        </div>
                        <div className={styles.frameParent6}>
                          <div className={styles.bySteveKrug2000Parent}>
                            <div className={styles.bySteveKrugContainer}>
                              {`By `}
                              <span className={styles.steveKrug}>
                                Steve Krug
                              </span>
                              , 2000
                            </div>
                            <h3 className={styles.secondEdition}>
                              Second Edition
                            </h3>
                          </div>
                          <div className={styles.frameParent7}>
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
                                  alt=""
                                  src="/star@2x.png"
                                />
                                <img
                                  className={styles.starIcon4}
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
                        </div>
                        <div className={styles.frameParent8}>
                          <div className={styles.availabilityParent}>
                            <b className={styles.availability}>Availability</b>
                            <b className={styles.status}>Status</b>
                          </div>
                          <div className={styles.frameWrapper4}>
                            <div className={styles.frameParent9}>
                              <div className={styles.frameParent10}>
                                <div className={styles.hardCopyWrapper}>
                                  <h3 className={styles.hardCopy}>Hard Copy</h3>
                                </div>
                                <div className={styles.eBookWrapper}>
                                  <h3 className={styles.eBook}>E - Book</h3>
                                </div>
                                <h3 className={styles.audioBook}>Audio book</h3>
                              </div>
                              <div className={styles.frameWrapper5}>
                                <div className={styles.frameParent11}>
                                  <div className={styles.groupDiv}>
                                    <div className={styles.frameChild2} />
                                    <h3 className={styles.inShelf}>In-Shelf</h3>
                                  </div>
                                  <div
                                    className={styles.heroiconsMinimapPinParent}
                                  >
                                    <img
                                      className={styles.heroiconsMinimapPin}
                                      loading="lazy"
                                      alt=""
                                      src="/heroiconsminimappin1@2x.png"
                                    />
                                    <div className={styles.csA15}> CS A-15</div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.frameWrapper6}>
                                <div className={styles.rectangleParent1}>
                                  <div className={styles.frameChild3} />
                                  <div className={styles.addToList}>
                                    Add to List
                                  </div>
                                  <div className={styles.polygonContainer}>
                                    <img
                                      className={styles.frameChild4}
                                      alt=""
                                      src="/polygon-1-3.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameParent12}>
                          <button
                            className={styles.groupButton}
                            onClick={onGroupButtonClick}
                          >
                            <div className={styles.frameChild5} />
                            <div className={styles.borrow}>BORROW</div>
                          </button>
                          <button className={styles.rectangleParent2}>
                            <div className={styles.frameChild6} />
                            <div className={styles.readNowWrapper}>
                              <b className={styles.readNow}>Read Now</b>
                            </div>
                            <img
                              className={styles.groupIcon}
                              alt=""
                              src="/group-321.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.imageSet}>
                  <div className={styles.containerStack}>
                    <div className={styles.buttonCollection}>
                      <div className={styles.dropdownMenuItems}>
                        <h2 className={styles.aboutAuthor}>
                          <span>About</span>
                          <span className={styles.author}> Author</span>
                        </h2>
                        <h2 className={styles.steveKrug1}>Steve Krug</h2>
                      </div>
                      <div className={styles.shapeBundles}>
                        <img
                          className={styles.shapeBundlesChild}
                          loading="lazy"
                          alt=""
                          src="/rectangle-19-1@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.steveKrugIs}>
                      Steve Krug is a usability consultant who has more than 30
                      years of experience as a user advocate for companies like
                      Apple, Netscape, AOL, Lexus, and others. Based in part on
                      the success of his first book, Don't Make Me Think, he has
                      become a highly sought-after speaker on usability design.
                    </div>
                  </div>
                  <div className={styles.tableDataCells}>
                    <h3 className={styles.otherBooks}>Other Books</h3>
                    <div className={styles.circleCluster}>
                      <div className={styles.circleClusterInner}>
                        <img
                          className={styles.rectangleIcon}
                          alt=""
                          src="/rectangle-161@2x.png"
                        />
                      </div>
                      <div className={styles.circleClusterChild}>
                        <img
                          className={styles.frameChild7}
                          alt=""
                          src="/rectangle-162@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.starCollection}>
                <div className={styles.ovalGathering}>
                  <div className={styles.div}>
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
                        <div className={styles.rangeSliderTrack}>
                          <h3 className={styles.buyNow}>Buy Now</h3>
                        </div>
                      </div>
                      <div className={styles.radioButtonSetWrapper}>
                        <div className={styles.radioButtonSet}>
                          <img
                            className={styles.image2Icon}
                            loading="lazy"
                            alt=""
                            src="/image-2@2x.png"
                          />
                          <div className={styles.rowDefinition}>
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
                <div className={styles.stageArea}>
                  <div className={styles.tab}>
                    <button className={styles.a3}>
                      <div className={styles.overview}>Overview</div>
                    </button>
                    <div className={styles.view166EditionsWrapper}>
                      <div className={styles.view166Editions}>
                        View 166 Editions
                      </div>
                    </div>
                    <div className={styles.detailsWrapper}>
                      <div className={styles.details}>Details</div>
                    </div>
                    <div className={styles.kReviewsWrapper}>
                      <div className={styles.kReviews}>4.1k Reviews</div>
                    </div>
                    <div className={styles.listsWrapper}>
                      <div className={styles.lists}>Lists</div>
                    </div>
                    <div className={styles.relatedBooksWrapper}>
                      <div className={styles.relatedBooks}>Related Books</div>
                    </div>
                  </div>
                  <div className={styles.temperatureSensor}>
                    <div className={styles.div1}>
                      <div className={styles.div2}>
                        <div className={styles.publishDate}>Publish Date</div>
                        <div className={styles.gyroscopeDisplay}>
                          <div className={styles.compassDisplay}>2000</div>
                        </div>
                      </div>
                      <div className={styles.div3}>
                        <div className={styles.temperatureDisplay}>
                          <div className={styles.publisher}>Publisher</div>
                        </div>
                        <div className={styles.newRidersPress}>
                          New Riders Press
                        </div>
                      </div>
                      <div className={styles.div4}>
                        <div className={styles.language}>Language</div>
                        <div className={styles.englishWrapper}>
                          <div className={styles.english}>English</div>
                        </div>
                      </div>
                      <div className={styles.div5}>
                        <div className={styles.pages}>Pages</div>
                        <div className={styles.wrapper}>
                          <div className={styles.div6}>216</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.previewsAvailableInEnglishParent}>
                    <div className={styles.previewsAvailableInContainer}>
                      <span>{`Previews available in: `}</span>
                      <span className={styles.english1}>English</span>
                    </div>
                    <div className={styles.div7}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bookDetailsWrapper}>
          <div className={styles.bookDetails}>
            <div className={styles.dataProcessor}>
              <div className={styles.listCollectorWrapper}>
                <div className={styles.listCollector}>
                  <h1 className={styles.bookDetails1}>Book Details</h1>
                  <div className={styles.inputSplitter}>
                    <div className={styles.publishedIn}>Published in</div>
                    <div className={styles.outputAggregator}>
                      <div className={styles.unitedStates}>United States</div>
                    </div>
                    <div className={styles.stringMerger}>
                      <div className={styles.editionNotes}>Edition Notes</div>
                      <div className={styles.variableHolder}>
                        <div className={styles.ifElseStatement}>
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
                  <div className={styles.errorHandler}>
                    <div className={styles.classifications}>
                      Classifications
                    </div>
                    <div className={styles.matrixTransformerParent}>
                      <div className={styles.matrixTransformer}>
                        <div className={styles.deweyDecimalClass}>
                          Dewey Decimal Class
                        </div>
                        <div className={styles.libraryOfCongress}>
                          Library of Congress
                        </div>
                      </div>
                      <div className={styles.parent}>
                        <div className={styles.div8}>823/.8</div>
                        <div className={styles.pr5485A12002}>
                          PR5485 .A1 2002
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div9}>
                <div className={styles.arrayBuilder}>
                  <div className={styles.graphBuilder}>
                    <h1 className={styles.communityReviews}>
                      Community Reviews
                    </h1>
                    <div className={styles.queueManager}>
                      <div className={styles.stackManager}>
                        <div className={styles.matrixUpdater}>
                          <div className={styles.arrayUpdater}>
                            <div className={styles.pace}>Pace</div>
                          </div>
                          <div className={styles.span}>
                            <div className={styles.meandering100}>
                              <span>{`Meandering `}</span>
                              <span className={styles.span1}> 100%</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.arrayReader}>
                          <div className={styles.graphReader}>
                            <div className={styles.treeReader}>
                              <div className={styles.enjoyability}>
                                Enjoyability
                              </div>
                              <div className={styles.difficulty}>
                                Difficulty
                              </div>
                            </div>
                          </div>
                          <div className={styles.arrayWriter}>
                            <div className={styles.span2}>
                              <div className={styles.interesting100}>
                                <span>Interesting</span>
                                <span className={styles.span3}> 100%</span>
                              </div>
                            </div>
                            <div className={styles.matrixFilter}>
                              <div className={styles.span4}>
                                <div className={styles.advanced100}>
                                  <span
                                    className={styles.advanced100TxtContainer}
                                  >
                                    <span>{`Advanced `}</span>
                                    <span className={styles.span5}> 100%</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.treeFilter}>
                          <div className={styles.matrixSorter}>
                            <div className={styles.arraySorter}>
                              <b className={styles.genres}>Genres</b>
                            </div>
                            <div className={styles.treeSorter}>
                              <div className={styles.span6}>
                                <div className={styles.horror66}>
                                  <span className={styles.horror66TxtContainer}>
                                    <span>{`Horror `}</span>
                                    <span className={styles.span7}> 66%</span>
                                  </span>
                                </div>
                              </div>
                              <div className={styles.span8}>
                                <div className={styles.mystery33}>
                                  <span
                                    className={styles.mystery33TxtContainer}
                                  >
                                    <span>{`Mystery `}</span>
                                    <span className={styles.span9}> 33%</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.inputFilter}>
                            <div className={styles.iterationLoop}>
                              <div className={styles.mood}>Mood</div>
                            </div>
                            <div className={styles.span10}>
                              <div className={styles.ominous25}>
                                <span className={styles.ominous25TxtContainer}>
                                  <span>{`Ominous `}</span>
                                  <span className={styles.span11}> 25%</span>
                                </span>
                              </div>
                            </div>
                            <div className={styles.span12}>
                              <div className={styles.scientific25}>
                                <span
                                  className={styles.scientific25TxtContainer}
                                >
                                  <span>
                                    <span className={styles.scientific}>
                                      Scientific
                                    </span>
                                    <b className={styles.b}>{` `}</b>
                                  </span>
                                  <b className={styles.b1}>
                                    <span> 25%</span>
                                  </b>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.errorHandler1}>
                          <div className={styles.dataSplitter}>
                            <div className={styles.dataMerger}>
                              <div className={styles.sequenceController}>
                                <div
                                  className={styles.impressions}
                                >{`Impressions `}</div>
                              </div>
                              <div className={styles.span13}>
                                <div className={styles.overhyped50}>
                                  <span
                                    className={styles.overhyped50TxtContainer}
                                  >
                                    <span>{`Overhyped `}</span>
                                    <span className={styles.span14}> 50%</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.dataTransformer}>
                              <div className={styles.connectionManager}>
                                <div className={styles.length}>{`Length `}</div>
                              </div>
                              <div className={styles.span15}>
                                <div className={styles.short100}>
                                  <span className={styles.short100TxtContainer}>
                                    <span>{`Short `}</span>
                                    <span className={styles.span16}> 100%</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.span17}>
                            <div className={styles.forgettable50}>
                              <span
                                className={styles.forgettable50TxtContainer}
                              >
                                <span>{`Forgettable `}</span>
                                <span className={styles.span18}> 50%</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.analyzer}>
                    <h3 className={styles.feedback}>Feedback?</h3>
                  </div>
                </div>
                <div className={styles.modifier}>
                  <b className={styles.addYourCommunity}>
                    Add your community review
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.combinationMaker}>
              <div className={styles.splitter}>
                <div className={styles.thePhysicalObject}>
                  The Physical Object
                </div>
                <div className={styles.transformerChain}>
                  <div className={styles.conditionChain}>
                    <div className={styles.pagination}>Pagination</div>
                    <div className={styles.numberOfPages}>Number of pages</div>
                  </div>
                  <div className={styles.dataFlowController}>
                    <div className={styles.ix112P}>
                      ix, 112 p. (large print) ;
                    </div>
                    <div className={styles.outputRouter}>216</div>
                  </div>
                </div>
              </div>
              <div className={styles.filterChain}>
                <div className={styles.idNumbers}>ID Numbers</div>
                <div className={styles.workflowManager}>
                  <div className={styles.dataPool}>
                    <div className={styles.myBookShelf}>My Book Shelf</div>
                    <div className={styles.isbn10}>ISBN 10</div>
                    <div className={styles.lccn}>LCCN</div>
                    <div className={styles.libraryThing}>Library Thing</div>
                    <div className={styles.goodreads}>Goodreads</div>
                  </div>
                  <div className={styles.dataPool1}>
                    <div className={styles.ol3570252m}>OL3570252M</div>
                    <div className={styles.div10}>0486424715</div>
                    <div className={styles.div11}>2002073560</div>
                    <div className={styles.div12}>12349</div>
                    <div className={styles.div13}>690668</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sideBar}>
        <div className={styles.sideBar1}>
          <div className={styles.homeMenu} onClick={onHomeMenuContainerClick}>
            <div className={styles.dataDock}>
              <img
                className={styles.heroiconsMinihome}
                loading="lazy"
                alt=""
                src="/heroiconsminihome1.svg"
              />
            </div>
            <h2 className={styles.home}>Home</h2>
          </div>
          <div className={styles.dataScope}>
            <div className={styles.dataFusion}>
              <div
                className={styles.searchMenu}
                onClick={onSearchMenuContainerClick}
              >
                <div className={styles.branchingLogic}>
                  <img
                    className={styles.searchIcon1}
                    loading="lazy"
                    alt=""
                    src="/search1.svg"
                  />
                </div>
                <h2 className={styles.search1}>Search</h2>
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
                  <h2 className={styles.myShelf}>My Shelf</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sideBarInner}>
            <div className={styles.aboutParent}>
              <h3 className={styles.about}>{`About `}</h3>
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

export default BookPreview;
