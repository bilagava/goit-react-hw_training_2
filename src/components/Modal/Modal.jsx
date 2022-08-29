import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './style.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal Did');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal Will');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  hendleKeydown = e => {
    if (e.code === 'Escape') {
      console.log('нажали Esc');

      this.props.onClose();
    }
  };

  hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={style.modalBackdrop} onClick={this.hendleBackdropClick}>
        <div className={style.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
