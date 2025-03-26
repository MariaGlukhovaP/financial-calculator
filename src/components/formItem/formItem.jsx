import styles from "./formItem.module.css";

export const FormItem = ({ label, id, type, name, value, onInputChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onInputChange}
        className={styles.input}
      />
    </div>
  );
};
