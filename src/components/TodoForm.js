import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;