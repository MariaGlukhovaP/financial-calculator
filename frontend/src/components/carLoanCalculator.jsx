import { LoanCalculator } from "./loanCalculator/loanCalculator";

const INITIAL_VALUES = {
  itemPrice: 700_000,
  interestRate: 3.5,
  downPayment: 100_000,
  loanTerm: 5,
  email: "",
};

export const CarLoanCalculator = () => {
  return (
    <LoanCalculator
      calculatorName="Калькулятор автокредита"
      initialValues={INITIAL_VALUES}
    />
  );
};
