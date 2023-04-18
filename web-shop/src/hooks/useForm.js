import { useState } from "react";

export const useForm = (data, onSubmitHandler) => {
  const [values, setValues] = useState(data);

  const onChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onSubmitHandler(values);

    setValues((current) => ({
      ...current,
      comment: "",
    }));
  };

  return {
    values,
    onChange,
    onSubmit,
  };
};
