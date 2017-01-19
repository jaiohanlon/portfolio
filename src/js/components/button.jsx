import React, { PropTypes } from 'react';
import styles from '../../scss/components/button';

const Button = ({
  children,
  onButtonClick,
}) => {
  const _handleButtonClick = event => {
    event.preventDefault();
    onButtonClick();
  }

  return (
    <button className={[styles.button, buttonStyle].join(" ")} onClick={_handleButtonClick}>
      <span className={[styles.buttonContent, buttonContentStyle].join(" ")}>
        {buttonContent}
      </span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onButtonClick: PropTypes.func,
  buttonStyle: PropTypes.string,
  buttonContentStyle: PropTypes.string,
};

export default Button;