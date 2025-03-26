import { useLoanCalculator } from "../../hooks/useLoanCalculator";
import { useLoanForm } from "../../hooks/useLoanForm";
import { CalculationResults } from "../calculationResults/calculationResults";
import { LoanForm } from "../loanForm/loanForm";
import styles from "./loanCalculator.module.css";

const INITIAL_VALUES = {
  itemPrice: 2_000_000,
  interestRate: 9.6,
  downPayment: 500_000,
  loanTerm: 20,
};

export const LoanCalculator = () => {
  const {
    formData,
    isSubmitted,
    handleInputChange,
    handleReset,
    setIsSubmitted,
  } = useLoanForm(INITIAL_VALUES);

  const calculationResult = useLoanCalculator(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Кредитный калькулятор</h1>
      <p className={styles.description}>
        Вы можете рассчитать ежемесячный платеж и ставку по кредиту, а также
        многие другие метрики, используя наш калькулятор. У вас так же есть
        возможность получить вычисленные данные на электронную почту.
      </p>
      <div className={styles.formContainer}>
        <LoanForm
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />
        {isSubmitted && (
          <CalculationResults calculationResult={calculationResult} />
        )}
      </div>
    </div>
  );
};
