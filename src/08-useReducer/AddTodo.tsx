import { useState } from 'react';
import { Todo } from '../types/todos';

type Props = {
  sendTodo: (todo: Todo) => void
}

export const AddTodo = ({ sendTodo }: Props) => {
  const [inputState, setInputState] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setInputState(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!inputState.length) return

    const newTodo: Todo = {
      id: new Date().getTime(),
      description: inputState,
      done: false
    }
    sendTodo(newTodo);
    
    setInputState('');
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input type='text' placeholder='Qué hay que hacer?' className='form-control' onChange={handleChange} value={inputState} />
      <button type='submit' className='btn btn-outline-primary mt-2'>
        Agregar
      </button>
    </form>
  );
};
