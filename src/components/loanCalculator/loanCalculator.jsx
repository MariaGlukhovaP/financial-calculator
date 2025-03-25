import { useLoanCalculator } from "../../hooks/useLoanCalculator";
import { useLoanForm } from "../../hooks/useLoanForm";
import { CalculationResults } from "../calculationResults/calculationResults";
import { LoanForm } from "../loanForm/loanForm";
import { SubmitResultsButton } from "../submitResultsButton";
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
      <LoanForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />

      {isSubmitted && (
        <>
          <CalculationResults calculationResult={calculationResult} />
          <SubmitResultsButton calculationResult={calculationResult} />
        </>
      )}
    </div>
  );
};
