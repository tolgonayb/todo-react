import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ id, label, onToggleImportant, onToggleDelete, onToggleDone, done, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
    textDecoration: done ? 'line-through' : 'none'
  };



    return (
    <span className="todo-list-item">
      <span
          onClick={() => {onToggleDone(id)}}
        className="todo-list-item-label done"
        style={style}>
        {label}
      </span>

      <button type="button" onClick = {() => onToggleImportant(id)}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" onClick = {() => onToggleDelete(id)}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
