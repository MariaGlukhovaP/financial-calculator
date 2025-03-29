import { useLoanCalculator } from "../../hooks/useLoanCalculator";
import { useLoanForm } from "../../hooks/useLoanForm";
import { CalculationResults } from "../calculationResults/calculationResults";
import { LoanForm } from "../loanForm/loanForm";
import styles from "./loanCalculator.module.css";

export const LoanCalculator = ({ calculatorName, initialValues }) => {
  const {
    formData,
    isSubmitted,
    handleInputChange,
    handleReset,
    setIsSubmitted,
  } = useLoanForm(initialValues);

  const { email } = formData;

  const calculationResult = useLoanCalculator(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{calculatorName}</h2>
      <div className={styles.formContainer}>
        <LoanForm
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />
        {isSubmitted && (
          <CalculationResults
            calculationResult={calculationResult}
            email={email}
          />
        )}
      </div>
    </div>
  );
};
