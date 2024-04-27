import styles from "./ListedUsers.module.css";

const ListedUsers = () => {
  return (
    <div className={styles.listedUsers}>
      <div className={styles.frameParent}>
        <div className={styles.listedUsersWrapper}>
          <b className={styles.listedUsers1}>Listed Users</b>
        </div>
        <img className={styles.frameChild} alt="" src="/vector-131.svg" />
      </div>
      <div className={styles.listedUsersInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.nameParent}>
                <b className={styles.name}>Name</b>
                <div className={styles.productDetailWrapper}>
                  <div className={styles.productDetail}>
                    <img
                      className={styles.dataAggregatorIcon}
                      alt=""
                      src="/data-aggregator@2x.png"
                    />
                    <div className={styles.brandParent}>
                      <div className={styles.brand}>Roselle Ehrman</div>
                      <div className={styles.brand1}>roselle@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.childCollector}>
                <b className={styles.id}>ID</b>
                <div className={styles.treeStructure}>
                  <div className={styles.el40012}>EL40012</div>
                </div>
              </div>
            </div>
            <div className={styles.outputFormatter}>
              <div className={styles.bookIssuedParent}>
                <b className={styles.bookIssued}>Book issued</b>
                <div className={styles.wrapper}>
                  <div className={styles.div}>12</div>
                </div>
              </div>
              <div className={styles.errorHandlerParent}>
                <div className={styles.errorHandler}>
                  <b className={styles.bookId}>Book ID</b>
                </div>
                <div className={styles.outputProcessor}>1254785</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.actionWrapper}>
                <b className={styles.action}>Action</b>
              </div>
              <img
                className={styles.actionIcon}
                loading="lazy"
                alt=""
                src="/action.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent2}>
              <div className={styles.productDetailParent}>
                <div className={styles.productDetail1}>
                  <img
                    className={styles.productDetailChild}
                    alt=""
                    src="/ellipse-12-1@2x.png"
                  />
                  <div className={styles.brandGroup}>
                    <div className={styles.brand2}>Andriana</div>
                    <div className={styles.brand3}>andriana@gmail.com</div>
                  </div>
                </div>
                <div className={styles.el40013Wrapper}>
                  <div className={styles.el40013}>EL40013</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div1}>27</div>
                </div>
                <div className={styles.frame}>
                  <div className={styles.div2}>1285685</div>
                </div>
                <div className={styles.actionContainer}>
                  <img
                    className={styles.actionIcon1}
                    alt=""
                    src="/action.svg"
                  />
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.productDetailGroup}>
                  <div className={styles.productDetail2}>
                    <img
                      className={styles.productDetailItem}
                      alt=""
                      src="/ellipse-12-2@2x.png"
                    />
                    <div className={styles.brandContainer}>
                      <div className={styles.brand4}>Vacinzo</div>
                      <div className={styles.brand5}>vacinzo@gmail.com</div>
                    </div>
                  </div>
                  <div className={styles.el40014Wrapper}>
                    <div className={styles.el40014}>EL40014</div>
                  </div>
                  <div className={styles.wrapper1}>
                    <div className={styles.div3}>30</div>
                  </div>
                  <div className={styles.wrapper2}>
                    <div className={styles.div4}>1254795</div>
                  </div>
                  <div className={styles.actionFrame}>
                    <img
                      className={styles.actionIcon2}
                      alt=""
                      src="/action.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent3}>
              <div className={styles.productDetailContainer}>
                <div className={styles.productDetail3}>
                  <img
                    className={styles.productDetailInner}
                    alt=""
                    src="/ellipse-12-3@2x.png"
                  />
                  <div className={styles.brandParent1}>
                    <div className={styles.brand6}>Leatrice Kulik</div>
                    <div className={styles.brand7}>Kulik@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className={styles.el40016Wrapper}>
                <div className={styles.el40016}>EL40016</div>
              </div>
              <div className={styles.wrapper3}>
                <div className={styles.div5}>32</div>
              </div>
              <div className={styles.wrapper4}>
                <div className={styles.div6}>1143585</div>
              </div>
              <img className={styles.actionIcon3} alt="" src="/action.svg" />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.listedUsersChild} alt="" src="/vector-131.svg" />
    </div>
  );
};

export default ListedUsers;
