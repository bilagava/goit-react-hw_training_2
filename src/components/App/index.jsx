import React, { Component } from 'react';
import shortid from 'shortid';

// import Form from '../Form';
import ToduList from 'components/TodoList';
import TodoEditor from 'components/TodoList/TodoEditor';
import Filter from 'components/TodoList/Filter';
import Modal from '../Modal/Modal';
import IconButton from '../IconButton/IconButton';
// import { ReactComponent as AddIconMin } from '../Icon/minus.svg';
import { ReactComponent as AddIconPl } from '../Icon/plus.svg';
// import Clock from '../Clock';
// import ColorPicker from 'components/ColorPicker';
// import Dropdown from 'components/Dropdown';
// import Counter from '../Counter';
import styles from './style.module.css';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo-1', complited: false },
      { id: 'id-2', text: 'Todo-2', complited: true },
      { id: 'id-3', text: 'Todo-3', complited: false },
      { id: 'id-4', text: 'Todo-4', complited: true },
    ],
    inputValue: '',
    filter: '',
    showModal: false,
  };

  componentDidMount = () => {
    // console.log('App componentDidMount');
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log('App componentDidUpdate');

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log('Обновилось поле todos');

      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      complited: false,
    };
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));

    // this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleComplited = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, complited: !todo.complited } : todo
      ),
    }));
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calcComplitedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.complited ? total + 1 : total),
      0
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    console.log('App render');

    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const complitedTodoCount = this.calcComplitedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <div className={styles.container}>
        {/* <Clock /> */}

        {/* <IconButton onClick={this.toggleModal}>
          <AddIconMin width="20" height="20" fill="#fff" />
        </IconButton> */}
        <IconButton onClick={this.toggleModal}>
          <AddIconPl width="20" height="20" fill="#fff" />
        </IconButton>
        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal} aria-label="Добавить todo">
            <TodoEditor onSubmit={this.addTodo} />
            {/* <h1>Привет єто контент модалки children</h1>
            <p>
              lorem3dfhstth aertnerrtabeertb e4tbe4tbq34 tbqe4tbe4tbqe
              4tbae44ttbae44 tbae44t beq44ttbe44tbqe4t bee4tbe atbqe4tbq
              4tbq4tbeq4tb
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button> */}
          </Modal>
        )}
        {/* <TodoEditor onSubmit={this.addTodo} /> */}
        <Filter value={filter} onChange={this.changeFilter} />
        <ToduList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleComplited={this.toggleComplited}
        />
        <div>
          <p>Общее кол-во Todo:{totalTodoCount}</p>
          <p>Кол-во выполненых Todo:{complitedTodoCount}</p>
        </div>
        {/* <Form onSubmit={this.formSubmitHandler} />
        <ColorPicker options={colorPickerOptions} /> */}
        {/* <Counter />
        <Dropdown /> */}
      </div>
    );
  }
}

export default App;
