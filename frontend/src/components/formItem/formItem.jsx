import styles from "./formItem.module.css";

export const FormItem = ({
  label,
  type,
  name,
  value,
  onInputChange,
  placeholder,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onInputChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};
