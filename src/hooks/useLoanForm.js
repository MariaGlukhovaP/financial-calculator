import { useState } from "react";

export const useLoanForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const RESET_VALUES = {
    itemPrice: 0,
    interestRate: 0,
    downPayment: 0,
    loanTerm: 0,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: Number(value),
    });
  };

  const handleReset = () => {
    setFormData(RESET_VALUES);
    setIsSubmitted(false);
  };

  return {
    formData,
    isSubmitted,
    setFormData,
    handleInputChange,
    setIsSubmitted,
    handleReset,
  };
};
