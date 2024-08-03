import { useState } from 'react';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: '',
    userEmail: '',
  });
  const { userName, userEmail } = formState;

  const inputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Name'
        name='userName'
        value={userName}
        onChange={inputChange}
      />
      <input
        type='text'
        className='form-control mt-2'
        placeholder='Email'
        name='userEmail'
        value={userEmail}
        onChange={inputChange}
      />
    </>
  );
};
