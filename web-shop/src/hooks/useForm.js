import { useState } from "react";

export const useForm = (data, onSubmitHandler) => {
  const [values, setValues] = useState(data);

  const onChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onSubmitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
};
