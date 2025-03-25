export const LoanForm = ({
  formData: { itemPrice, interestRate, downPayment, loanTerm },
  onInputChange,
  onSubmit,
  onReset,
}) => (
  <form onSubmit={onSubmit}>
    <div>
      <label htmlFor="itemPrice">Общая сумма (руб):</label>
      <input
        id="itemPrice"
        type="number"
        name="itemPrice"
        value={itemPrice}
        onChange={onInputChange}
      />
    </div>

    <div>
      <label htmlFor="interestRate">Процентная ставка (%):</label>
      <input
        id="interestRate"
        type="number"
        name="interestRate"
        value={interestRate}
        onChange={onInputChange}
      />
    </div>

    <div>
      <label htmlFor="downPayment">Первоначальный взнос (руб):</label>
      <input
        id="downPayment"
        type="number"
        name="downPayment"
        value={downPayment}
        onChange={onInputChange}
      />
    </div>

    <div>
      <label htmlFor="loanTerm">Срок кредита (лет):</label>
      <input
        id="loanTerm"
        type="number"
        name="loanTerm"
        value={loanTerm}
        onChange={onInputChange}
      />
    </div>

    <div>
      <button type="submit">Рассчитать</button>
      <button type="button" onClick={onReset}>
        Сбросить
      </button>
    </div>
  </form>
);
