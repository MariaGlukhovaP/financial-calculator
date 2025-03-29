export const useLoanCalculator = (formData) => {
  const calculateLoan = () => {
    const { itemPrice, interestRate, downPayment, loanTerm } = formData;

    const loanAmount = itemPrice - downPayment;
    const monthlyInterestRate = interestRate / 12 / 100;
    const totalInterestRate =
      Math.round(Math.pow(1 + monthlyInterestRate, loanTerm * 12) * 100) / 100;
    const monthlyPayment = Math.round(
      (loanAmount * monthlyInterestRate * totalInterestRate) /
        (totalInterestRate - 1)
    );
    const requiredIncome = Math.round(monthlyPayment * 2.5);

    return {
      loanAmount,
      monthlyInterestRate,
      totalInterestRate,
      monthlyPayment,
      requiredIncome,
    };
  };

  return calculateLoan();
};
