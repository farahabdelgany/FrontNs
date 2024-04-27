import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FRAME from "../components/FRAME";
import SideBarFrame from "../components/SideBarFrame";
import TransactionItem from "../components/TransactionItem";
import styles from "./AllTranscation.module.css";

const AllTranscation = () => {
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
    <div className={styles.allTranscation}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector1.svg" />
      <FRAME />
      <SideBarFrame
        bookshelf="/bookshelf.svg"
        giveGift="/give-gift1.svg"
        propColor="#8a8a8a"
        propColor1="#4d4d4d"
        sideBarFrameTop="48px"
        sideBarFrameLeft="35px"
        sideBarFrameMargin="unset"
        sideBarFrameBottom="unset"
        onHomeMenuContainerClick={onHomeMenuContainerClick}
        onSearchMenuContainerClick={onSearchMenuContainerClick}
        onMyShelfMenuClick={onMyShelfMenuClick}
      />
      <h1 className={styles.shelf}>Shelf</h1>
      <h1 className={styles.smart}>Smart</h1>
      <div className={styles.recentTransactions} />
      <div className={styles.recentTransaction}>
        <div className={styles.mainContent}>
          <div className={styles.menuTab}>
            <div className={styles.all}>
              <b className={styles.all1}>All</b>
            </div>
            <div className={styles.revenue}>
              <b className={styles.revenue1}>Revenue</b>
            </div>
            <div className={styles.expenses}>
              <b className={styles.expenses1}>Expenses</b>
            </div>
          </div>
          <div className={styles.mainContent1}>
            <div className={styles.header}>
              <div className={styles.item}>
                <b className={styles.items}>Items</b>
              </div>
              <div className={styles.headerContent}>
                <div className={styles.headerContent1}>
                  <b className={styles.shopName}>Shop name</b>
                  <b className={styles.date}>Date</b>
                  <b className={styles.paymentMethod}>Payment Method</b>
                </div>
                <b className={styles.amount}>Amount</b>
              </div>
            </div>
            <div className={styles.transactionList}>
              <div className={styles.transactionList1}>
                <TransactionItem
                  gamepad2="/gamepad2.svg"
                  gTR5="bookname"
                  gadgetGear="Simba"
                  creditCard="Credit Card"
                  none="$160.00"
                />
                <TransactionItem
                  gamepad2="/shopping.svg"
                  gTR5="bookname"
                  gadgetGear="Electro"
                  creditCard="Invoice"
                  none="$20.00"
                  propBorderBottom="1px solid var(--special-bg)"
                  propPadding="var(--padding-mini) 0px var(--padding-sm)"
                />
                <TransactionItem
                  gamepad2="/food.svg"
                  gTR5="Biriyani"
                  gadgetGear="Marketplace"
                  creditCard="Credit Card"
                  none="$12.00"
                  propBorderBottom="1px solid var(--special-bg)"
                  propPadding="var(--padding-mini) 0px var(--padding-sm)"
                />
                <TransactionItem
                  gamepad2="/movie.svg"
                  gTR5="Internet"
                  gadgetGear="Marketplace"
                  creditCard="Credit Card"
                  none="$15.00"
                  propBorderBottom="1px solid var(--special-bg)"
                  propPadding="var(--padding-mini) 0px var(--padding-sm)"
                />
                <TransactionItem
                  gamepad2="/trasnport.svg"
                  gTR5="Car"
                  gadgetGear="Markeplace"
                  creditCard="cash"
                  none="$10.00"
                  propBorderBottom="1px solid var(--special-bg)"
                  propPadding="var(--padding-mini) 0px var(--padding-sm)"
                />
                <TransactionItem
                  gamepad2="/food.svg"
                  gTR5="Lunch items"
                  gadgetGear="Market"
                  creditCard="Credit Card"
                  none="$20.00"
                  propBorderBottom="1px solid var(--special-bg)"
                  propPadding="var(--padding-mini) 0px var(--padding-sm)"
                />
                <TransactionItem
                  gamepad2="/shopping.svg"
                  gTR5="Keyboard"
                  gadgetGear="Market"
                  creditCard="Credit Card"
                  none="$30.00"
                  propBorderBottom="unset"
                  propPadding="var(--padding-base) 0px"
                />
              </div>
              <button className={styles.buttonBig}>
                <b className={styles.addAccounts}>load More</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTranscation;
