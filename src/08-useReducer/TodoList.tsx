import { Todos } from '../types/todos';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todos
}

export const TodoList = ({ todos }: Props) => {
  return (
    <ul className='list-group'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </ul>
  );
};
