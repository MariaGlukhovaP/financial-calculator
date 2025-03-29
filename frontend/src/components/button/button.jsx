import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ title, onButtonClick, type, viewVariant }) => {
  return (
    <button
      type={type}
      className={classNames(styles.button, {
        [styles.primary]: viewVariant === "primary",
        [styles.secondary]: viewVariant === "secondary",
      })}
      onClick={onButtonClick}
    >
      {title}
    </button>
  );
};
