import styles from "./Form.module.css";

const Form = ({ aDDBOOK }) => {
  return (
    <div className={styles.form}>
      <div className={styles.eBooks}>E-Books</div>
      <div className={styles.audioBooks}>Audio Books</div>
      <div className={styles.card} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <input
          className={styles.enterDate}
          placeholder="Enter date"
          type="text"
        />
      </div>
      <div className={styles.date}>Date</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <input
          className={styles.enterBookNamel}
          placeholder="Enter book namel"
          type="text"
        />
      </div>
      <div className={styles.title}>Title</div>
      <h1 className={styles.addBook}>{aDDBOOK}</h1>
      <img
        className={styles.formChild}
        loading="lazy"
        alt=""
        src="/line-11.svg"
      />
      <div className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <input
          className={styles.enterBookId}
          placeholder="Enter book ID"
          type="text"
        />
      </div>
      <div className={styles.bookId}>book ID</div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleDiv} />
        <input
          className={styles.enterAuthorName}
          placeholder="Enter  author name"
          type="text"
        />
      </div>
      <div className={styles.author}>Author</div>
      <button className={styles.frameButton}>
        <div className={styles.frameChild1} />
        <div className={styles.confirm}>Confirm</div>
      </button>
      <button className={styles.rectangleParent1}>
        <div className={styles.frameChild2} />
        <div className={styles.cancel}>Cancel</div>
      </button>
    </div>
  );
};

export default Form;
