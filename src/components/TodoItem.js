import React, { useState } from 'react';

function TodoItem({
  todo,
  deleteTodo,
  updateTodo,
  toggleTodo
}) {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      /> 

      {
        isEditing ? (
          <input
            className="todo-edit-input"
            value={editText}
            onChange={(e) =>
              setEditText(e.target.value)
            }
          />
        ) : (
          <span
            className="todo-text"
            style={{
              textDecoration: todo.completed
                ? 'line-through'
                : 'none'
            }}
          >
            {todo.text}
          </span>
        )
      }

      <div className="todo-buttons">

        {
          isEditing ? (
            <button onClick={handleUpdate}>
              저장
            </button>
          ) : (
            <button className="cr" onClick={() => setIsEditing(true)}>
              수정
            </button>
          )
        }

        <button className="cr" onClick={() => deleteTodo(todo.id)}>
          삭제
        </button>

      </div>

    </div>
  );
}

export default TodoItem;