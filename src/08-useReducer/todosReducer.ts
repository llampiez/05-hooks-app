import { Todo, Todos } from '../types/todos';

type Action = {
  type: string
  payload: Todo
}

export const todosReducer = (todos: Todos, action: Action) => {
  switch (action.type) {
    case 'Add TODO':
      return [...todos, action.payload]

    default:
      return todos;
  }
};
