import React from 'react';
import Controls from './Controls';
import Value from './Value';

import style from './style.module.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={style.Сounter}>
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
export default Counter;
