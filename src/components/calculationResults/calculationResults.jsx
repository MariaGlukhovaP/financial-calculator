import { SubmitResultsButton } from "../submitResultsButton";
import { ResultItem } from "./../resultItem/resultItem";
import styles from "./calculationResults.module.css";

export const CalculationResults = ({ calculationResult }) => {
  const {
    loanAmount,
    monthlyInterestRate,
    totalInterestRate,
    monthlyPayment,
    requiredIncome,
  } = calculationResult;

  return (
    <div className={styles.container}>
      <ResultItem
        title="Сумма кредита (руб):"
        value={loanAmount.toLocaleString()}
      />
      <ResultItem
        title="Ежемесячная ставка (%):"
        value={monthlyInterestRate.toLocaleString()}
      />
      <ResultItem
        title="Общая ставка (%):"
        value={totalInterestRate.toLocaleString()}
      />
      <ResultItem
        title="Ежемесячный платеж (руб):"
        value={
          Number(monthlyPayment) >= 0
            ? Number(monthlyPayment).toLocaleString()
            : "0"
        }
      />
      <ResultItem
        title="Необходимый доход (руб):"
        value={
          Number(requiredIncome) >= 0
            ? Number(requiredIncome).toLocaleString()
            : "0"
        }
      />
      <SubmitResultsButton calculationResult={calculationResult} />
    </div>
  );
};
