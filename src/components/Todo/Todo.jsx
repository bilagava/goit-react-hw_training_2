import React from 'react';
import style from '../TodoList/TodoList.module.css';

const Todo = ({ text, complited, onToggleComplited, onDelete }) => (
  <div>
    <input
      type="checkbox"
      className={style.checkbox}
      checked={complited}
      onChange={onToggleComplited}
    />
    <p className={style.TodoListText}>{text}</p>
    <button className={style.Todo__button} onClick={onDelete}>
      Удалить
    </button>
  </div>
);

export default Todo;
