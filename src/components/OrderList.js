import styles from "./OrderList.module.css";

const OrderList = () => {
  return (
    <section className={styles.orderList}>
      <div className={styles.bg} />
      <div className={styles.intentClassifier}>
        <div className={styles.idStatus}>
          <div className={styles.bg1} />
          <div className={styles.performanceMonitor}>
            <div className={styles.id}>ID</div>
          </div>
          <div className={styles.performanceMonitor1}>
            <div className={styles.name}>NAME</div>
          </div>
          <div className={styles.performanceMonitor2}>
            <div className={styles.address}>Book ID</div>
          </div>
          <div className={styles.userInteraction}>
            <div className={styles.date}>overdue</div>
          </div>
          <h3 className={styles.type}> fine</h3>
          <div className={styles.performanceMonitor3}>
            <div className={styles.status}>STATUS</div>
          </div>
        </div>
      </div>
      <div className={styles.geoLocator}>
        <div className={styles.languageDetector}>
          <div className={styles.emotionAnalyzer}>
            <div className={styles.sentimentScorer}>00001</div>
          </div>
          <div className={styles.topicExtractor}>
            <div className={styles.christineBrooks}>Christine Brooks</div>
          </div>
          <div className={styles.kutchGreenApt}> 448</div>
          <div className={styles.relationIdentifier}>
            <div className={styles.feb2019}>5 days</div>
          </div>
          <div className={styles.namedEntityRecognizer}>
            <div className={styles.electric}>{`30 le `}</div>
          </div>
          <div className={styles.summarizer}>
            <button className={styles.labelCompleted}>
              <div className={styles.labelCompleted1}>
                <div className={styles.dialogueModel} />
                <b className={styles.completed}>reterned late</b>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.geoLocator1}>
        <img
          className={styles.geoLocatorChild}
          loading="lazy"
          alt=""
          src="/line-21.svg"
        />
      </div>
      <div className={styles.geoLocator2}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>00002</div>
          </div>
          <div className={styles.rosiePearsonWrapper}>
            <div className={styles.rosiePearson}>Rosie Pearson</div>
          </div>
          <div className={styles.immanuelFerryS}>526</div>
          <div className={styles.feb2019Wrapper}>
            <div className={styles.feb20191}>{` 2 days `}</div>
          </div>
          <div className={styles.bookWrapper}>
            <div className={styles.book}>20</div>
          </div>
          <div className={styles.labelProcessingWrapper}>
            <button className={styles.labelProcessing}>
              <div className={styles.labelProcessing1}>
                <div className={styles.rectangle} />
                <b className={styles.processing}>returned</b>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.geoLocator3}>
        <img className={styles.geoLocatorItem} alt="" src="/line-2-1.svg" />
      </div>
      <div className={styles.outputFormatter}>
        <div className={styles.outputValidator}>
          <div className={styles.workflowAnalyzer}>
            <div className={styles.workflowOptimizer}>00003</div>
            <div className={styles.darrellCaldwell}>Darrell Caldwell</div>
            <div className={styles.workflowOptimizer1}>
              <div className={styles.fridaPorts}>{`8587 `}</div>
            </div>
            <div className={styles.workflowOptimizer2}>
              <div className={styles.feb20192}>{` 6 days `}</div>
            </div>
            <div className={styles.medicine}>60</div>
          </div>
        </div>
        <div className={styles.exceptionHandler}>
          <button className={styles.labelRejected}>
            <div className={styles.labelRejected1}>
              <div className={styles.performanceTuner} />
              <b className={styles.rejected}>Dalay</b>
            </div>
          </button>
        </div>
        <img
          className={styles.outputFormatterChild}
          alt=""
          src="/line-2-1.svg"
        />
      </div>
      <div className={styles.authorizationHandler}>
        <div className={styles.authenticationVerifier}>
          <div className={styles.loggingUtility}>
            <div className={styles.errorReporting}>
              <div className={styles.userPreferenceManager}>00005</div>
              <div className={styles.helpGenerator}>
                <div className={styles.alanCain}>Alan Cain</div>
              </div>
              <div className={styles.myleneThroughwa}>042</div>
            </div>
          </div>
          <button className={styles.labelProcessing2}>
            <div className={styles.labelProcessing3}>
              <div className={styles.databaseHandler} />
              <b className={styles.processing1}>returned</b>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.fileHandler}>
        <img className={styles.fileHandlerChild} alt="" src="/line-2-1.svg" />
      </div>
      <div className={styles.queueManager}>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <div className={styles.div1}>00006</div>
            <div className={styles.div2}>00006</div>
          </div>
          <div className={styles.alfredMurrayParent}>
            <div className={styles.alfredMurray}>Alfred Murray</div>
            <div className={styles.alfredMurray1}>Alfred Murray</div>
          </div>
          <div className={styles.weimannMountainParent}>
            <div className={styles.weimannMountain}>{`543 `}</div>
            <div className={styles.weimannMountain1}>{`543 `}</div>
          </div>
          <div className={styles.feb2019Parent}>
            <div className={styles.feb20193}>4 days</div>
            <div className={styles.feb20194}>4 days</div>
          </div>
          <div className={styles.medicineWrapper}>
            <div className={styles.medicine1}>40</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.labelCompletedParent}>
              <button className={styles.labelCompleted2}>
                <div className={styles.labelCompleted3}>
                  <div className={styles.rectangle1} />
                  <b className={styles.completed1}>{`late `}</b>
                </div>
              </button>
              <div className={styles.labelCompleted4}>
                <div className={styles.labelCompleted5}>
                  <div className={styles.rectangle2} />
                  <b className={styles.completed2}>Completed</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
