import React, { Component } from 'react';
import style from './style.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className={style.Dropdown}>
        <button
          type="button"
          className={style.Dropdown__toggle}
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>
        {visible && <div className={style.Dropdown__menu}>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
