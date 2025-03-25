import { useState } from "react";

export const useLoanForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: Number(value),
    });
  };

  const handleReset = () => {
    setFormData(initialValues);
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
