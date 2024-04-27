import SideBar from "../components/SideBar1";
import ListedUsers from "../components/ListedUsers";

import FrameComponent1 from "../components/FrameComponent12";

import FrameComponent from "../components/FrameComponent4";
import styles from "./HomeAdmin.module.css";

const HomeAdmin = () => {
  return (
    <div className={styles.homeAdmin}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector.svg" />
      <main className={styles.dashboard}>
        <div className={styles.saleInfo}>
          <div className={styles.bookings}>
            <img className={styles.bookingsChild} alt="" src="/frame-20.svg" />
            <div className={styles.bookingsParent}>
              <b className={styles.bookings1}>Borrowed books</b>
              <div className={styles.div}>280</div>
              <div className={styles.iconincreaseParent}>
                <img
                  className={styles.iconincrease}
                  alt=""
                  src="/iconincrease.svg"
                />
                <div className={styles.div1}>55%</div>
              </div>
            </div>
          </div>
          <div className={styles.date}>Date</div>
        </div>
        <div className={styles.saleInfo1}>
          <div className={styles.date1}>
            <img
              className={styles.dateChild}
              loading="lazy"
              alt=""
              src="/frame-201.svg"
            />
            <div className={styles.bookingsGroup}>
              <b className={styles.bookings2}>Today visitors</b>
              <div className={styles.div2}>2000</div>
              <div className={styles.iconincreaseGroup}>
                <img
                  className={styles.iconincrease1}
                  alt=""
                  src="/iconincrease.svg"
                />
                <div className={styles.div3}>8%</div>
              </div>
            </div>
          </div>
          <div className={styles.date2}>Date</div>
        </div>
      
        <div className={styles.saleInfo3}>
          <div className={styles.followers}>
            <img
              className={styles.followersChild}
              alt=""
              src="/frame-20-2.svg"
            />
            <div className={styles.frameDiv}>
              <b className={styles.bookings4}>Followers</b>
              <div className={styles.div6}>1800</div>
              <div className={styles.iconincreaseParent1}>
                <img
                  className={styles.iconincrease3}
                  alt=""
                  src="/iconincrease.svg"
                />
                <div className={styles.div7}>35%</div>
              </div>
            </div>
          </div>
          <div className={styles.date4}>Date</div>
        </div>
        <SideBar />
        <div className={styles.favouriteMenu}>
          <img className={styles.giveGiftIcon} alt="" src="/give-gift.svg" />
          <div className={styles.contribute}>Contribute</div>
        </div>
        <h1 className={styles.shelf}>Shelf</h1>
        <h1 className={styles.smart}>Smart</h1>
        <img className={styles.icon} loading="lazy" alt="" src="/icon@2x.png" />
        <ListedUsers />
       
       
        <section className={styles.topMain}>
          <FrameComponent />
        </section>
        <div className={styles.frameParent}>
          <FrameComponent1 />
          <div className={styles.procedureProcedural}>
            <div className={styles.classClassifier}>
              <div className={styles.objectObjective}>
                <div className={styles.showing5Of}>Showing 5 of 5 products</div>
              </div>
              <div className={styles.moduleModulemaker}>
                <div className={styles.textButton}>
                  <div className={styles.button}>Prev</div>
                </div>
                <div className={styles.dataProcessor}>
                  <img
                    className={styles.iconButton}
                    alt=""
                    src="/icon-button.svg"
                  />
                </div>
                <input className={styles.dataProcessor1} type="checkbox" />
                <div className={styles.textButton1}>
                  <div className={styles.button1}>Next</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <b className={styles.bookList}>Book list</b>
      </main>
    </div>
  );
};

export default HomeAdmin;
