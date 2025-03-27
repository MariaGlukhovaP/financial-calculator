import { LoanCalculator } from "./loanCalculator/loanCalculator";

const INITIAL_VALUES = {
  itemPrice: 2_000_000,
  interestRate: 9.6,
  downPayment: 500_000,
  loanTerm: 20,
};

export const MortgageCalculator = () => {
  return (
    <LoanCalculator
      calculatorName="Калькулятор ипотеки"
      initialValues={INITIAL_VALUES}
    />
  );
};
