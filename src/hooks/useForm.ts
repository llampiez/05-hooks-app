import { useState } from 'react';

type Props = {
  [propName: string]: string
}

export const useForm = (objForm: Props) => {
  const [formState, setFormState] = useState(objForm);

  const inputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(objForm)
  }

  return {
    formState,
    inputChange,
    resetForm
  };
};
