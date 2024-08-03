import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TodosApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodosApp />
  </React.StrictMode>,
);
