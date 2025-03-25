export const SubmitResultsButton = ({ calculationResult }) => (
  <div>
    <h3>Отправить результаты</h3>
    <button
      onClick={() => {
        alert(
          `Данные отправлены:\nСумма кредита: ${calculationResult.loanAmount.toLocaleString(
            "ru-RU"
          )} руб\nЕжемесячный платеж: ${calculationResult.monthlyPayment.toLocaleString(
            "ru-RU"
          )} руб`
        );
      }}
    >
      Отправить результаты на почту
    </button>
  </div>
);
