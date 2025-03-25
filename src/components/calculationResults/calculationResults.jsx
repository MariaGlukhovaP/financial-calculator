export const CalculationResults = ({
  calculationResult: {
    loanAmount,
    monthlyInterestRate,
    totalInterestRate,
    monthlyPayment,
    requiredIncome,
  },
}) => (
  <div>
    <h3>Результаты расчета:</h3>
    <p>
      Сумма кредита:
      {loanAmount.toLocaleString()} руб
    </p>
    <p>
      Ежемесячная ставка:
      {monthlyInterestRate.toLocaleString()} %
    </p>
    <p>
      Общая ставка:
      {totalInterestRate.toLocaleString()} %
    </p>
    <p>
      Ежемесячный платеж:
      {monthlyPayment.toLocaleString()} руб
    </p>
    <p>
      Необходимый доход:
      {requiredIncome.toLocaleString()} руб
    </p>
  </div>
);
