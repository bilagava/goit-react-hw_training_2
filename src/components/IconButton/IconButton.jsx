import React from 'react';
import PropTypes from 'prop-types';
import style from './IconButton.module.css';

const IconButton = ({ children, onclick, ...allyProps }) => (
  <button
    type="button"
    className={style.IconButton}
    onclick={onclick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
