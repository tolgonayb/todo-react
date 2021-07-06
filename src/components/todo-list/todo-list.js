import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onToggleImportant, onToggleDelete, onToggleDone}) => {

  const elements = todos.map((item) => {
    const { id } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem onToggleImportant = {onToggleImportant}
                      onToggleDelete = {onToggleDelete}
                      onToggleDone = {onToggleDone}
                      {...item } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
