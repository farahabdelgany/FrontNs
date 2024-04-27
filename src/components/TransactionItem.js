import { useMemo } from "react";
import styles from "./TransactionItem.module.css";

const TransactionItem = ({
  gamepad2,
  gTR5,
  gadgetGear,
  creditCard,
  none,
  propBorderBottom,
  propPadding,
}) => {
  const transactionItemStyle = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
      padding: propPadding,
    };
  }, [propBorderBottom, propPadding]);

  return (
    <div className={styles.transactionItem} style={transactionItemStyle}>
      <div className={styles.itemName}>
        <div className={styles.icon}>
          <img
            className={styles.gamepad2Icon}
            loading="lazy"
            alt=""
            src={gamepad2}
          />
        </div>
        <div className={styles.name}>
          <div className={styles.gtr5}>{gTR5}</div>
        </div>
      </div>
      <div className={styles.itemName1}>
        <div className={styles.shopNamePaymentMethod}>
          <div className={styles.gadgetGear}>{gadgetGear}</div>
          <div className={styles.may2023}>17 May, 2023</div>
          <div className={styles.creditCard}>{creditCard}</div>
        </div>
        <div className={styles.price}>
          <div className={styles.none}>{none}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
