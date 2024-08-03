import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { formState, inputChange, resetForm } = useForm({
    userName: '',
    userEmail: '',
    userPassword: '',
  });

  const {userName, userEmail, userPassword} = formState

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
      <input
        type='password'
        className='form-control mt-2'
        placeholder='Password'
        name='userPassword'
        value={userPassword}
        onChange={inputChange}
      />

      <button onClick={resetForm} className='btn btn-primary mt-2'>Borrar</button>
    </>
  );
};
