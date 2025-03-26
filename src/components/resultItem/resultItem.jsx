import styles from "./resultItem.module.css";

export const ResultItem = ({ title, value }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.value}>{value} </div>
    </div>
  );
};
