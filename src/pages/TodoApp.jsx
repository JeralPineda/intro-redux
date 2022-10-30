import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from '../store/api';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo = [] } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;

    setTodoId(todoId - 1);
  };

  return (
    <div>
      <div>
        <h1>TodoApp - RTK Query</h1>
        <hr />
        <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      </div>
      <hr />

      <h3>View Todo</h3>

      <h3>
        {todo.id}. {todo.completed ? 'Completed' : 'Pending'} " <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}> {todo.title}</span> "
      </h3>
      <button onClick={prevTodo}>Prev Todo</button>

      <button onClick={nextTodo}>Next Todo</button>

      <hr />
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
          </li>
        ))}
      </ul>

      <button>Next Todo</button>
    </div>
  );
};
