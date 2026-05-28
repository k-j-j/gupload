import React from 'react';
import TodoItem from './TodoItem';

function TodoList({
  todos,
  deleteTodo,
  updateTodo,
  toggleTodo
}) {
  return (
    <div>
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            toggleTodo={toggleTodo}
          />
        ))
      }
    </div>
  );
}

export default TodoList;