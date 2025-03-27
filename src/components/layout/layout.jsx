import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Кредитный калькулятор</h1>
      <p className={styles.description}>
        Вы можете рассчитать ежемесячный платеж и ставку по кредиту, а также
        многие другие метрики, используя наш калькулятор. У вас так же есть
        возможность получить вычисленные данные на электронную почту.
      </p>
      <div>{children}</div>
    </div>
  );
};
