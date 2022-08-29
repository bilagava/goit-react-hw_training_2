import React, { Component } from 'react';
import style from './style.module.css';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  render() {
    return <div className={style.clockFace}>{this.state.time}</div>;
  }
}
