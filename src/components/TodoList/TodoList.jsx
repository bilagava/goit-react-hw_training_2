import React from 'react';
import classNames from 'classnames';
import Todo from 'components/Todo/Todo';
import style from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleComplited }) => (
  <ul className={style.TodoList}>
    {todos.map(({ id, text, complited }) => (
      <li
        key={id}
        className={classNames(style.TodoListItem, {
          'style.TodoListItem__complited': complited,
        })}
      >
        <Todo
          text={text}
          complited={complited}
          onToggleComplited={() => onToggleComplited(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
