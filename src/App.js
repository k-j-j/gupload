import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  // localStorage에서 초기 데이터 불러오기
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');

    return savedTodos
      ? JSON.parse(savedTodos)
      : [];
  });

  // todos 변경될 때마다 localStorage 저장
  useEffect(() => {
    localStorage.setItem(
      'todos',
      JSON.stringify(todos)
    );
  }, [todos]);

  // 추가(Create)
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  // 삭제(Delete)
  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  };

  // 수정(Update)
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              text: newText
            }
          : todo
      )
    );
  };

  // 완료 토글
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;