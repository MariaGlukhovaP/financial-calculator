import { Button } from "./button/button";

export const SubmitResultsButton = ({ calculationResult }) => {
  return (
    <Button
      type="submit"
      onSubmit={() => {
        alert(
          `Данные отправлены:\nСумма кредита: ${calculationResult.loanAmount.toLocaleString(
            "ru-RU"
          )} руб\nЕжемесячный платеж: ${calculationResult.monthlyPayment.toLocaleString(
            "ru-RU"
          )} руб`
        );
      }}
      title="Отправить"
      viewVariant="primary"
    />
  );
};
