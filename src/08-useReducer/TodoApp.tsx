import { useEffect, useReducer } from 'react';
import { todosReducer } from './todosReducer';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { Todo, Todos } from '../types/todos';

const initialTodos = [
  {
    id: new Date().getTime(),
    description: '¡Este es tu primer TODO!',
    done: false,
  },
];

const init = () => {
  return JSON.parse(localStorage.getItem('todo') || [])
}

export const TodosApp = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const sendTodo = (todo: Todo) => {
    const action = {
      type: 'Add TODO',
      payload: todo,
    };

    dispatchTodos(action);
  };

  return (
    <>
      <h1>TODOS: 10 - PENDIENTES: 20</h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <AddTodo sendTodo={sendTodo} />
        </div>
      </div>
    </>
  );
};
