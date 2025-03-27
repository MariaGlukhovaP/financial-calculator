import { Button } from "../button/button";
import { FormItem } from "../formItem/formItem";
import styles from "./loanForm.module.css";

export const LoanForm = ({ formData, onInputChange, onSubmit, onReset }) => {
  const { itemPrice, interestRate, downPayment, loanTerm } = formData;

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <FormItem
        label="Общая сумма (руб):"
        type="number"
        name="itemPrice"
        value={itemPrice}
        onInputChange={onInputChange}
      />
      <FormItem
        label="Процентная ставка (%):"
        type="number"
        name="interestRate"
        value={interestRate}
        onInputChange={onInputChange}
      />
      <FormItem
        label="Первоначальный взнос (руб):"
        type="number"
        name="downPayment"
        value={downPayment}
        onInputChange={onInputChange}
      />
      <FormItem
        label="Срок кредита (лет):"
        type="number"
        name="loanTerm"
        value={loanTerm}
        onInputChange={onInputChange}
      />
      <div className={styles.buttonContainer}>
        <Button type="submit" title="Рассчитать" viewVariant="primary" />
        <Button
          type="button"
          onButtonClick={onReset}
          title="Сбросить"
          viewVariant="secondary"
        />
      </div>
    </form>
  );
};
