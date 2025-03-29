import { Button } from "./button/button";

export const SubmitResultsButton = ({ calculationResult, email }) => {
  const {
    loanAmount,
    monthlyInterestRate,
    totalInterestRate,
    monthlyPayment,
    requiredIncome,
  } = calculationResult;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loanAmount,
          monthlyInterestRate,
          totalInterestRate,
          monthlyPayment,
          requiredIncome,
          email,
        }),
      });

      if (!response.ok) {
        let errorMessage = `Ошибка запроса: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (jsonError) {
          console.error("Не удалось разобрать JSON ответа сервера:", jsonError);
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Произошла ошибка:", error);
      alert(error.message);
    }
  };

  return (
    <Button
      type="submit"
      title="Отправить"
      viewVariant="primary"
      onButtonClick={handleSubmit}
    />
  );
};
