import { LoanCalculator } from "./loanCalculator/loanCalculator";

const INITIAL_VALUES = {
  itemPrice: 100_000,
  interestRate: 14.5,
  downPayment: 30_000,
  loanTerm: 3,
};

export const ConsumerLoanCalculator = () => {
  return (
    <LoanCalculator
      calculatorName="Калькулятор потребительского кредита"
      initialValues={INITIAL_VALUES}
    />
  );
};
