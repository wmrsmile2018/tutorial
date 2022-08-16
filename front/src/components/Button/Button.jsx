import clsx from 'clsx';
import React from 'react';
import './styles.scss';

export const Button = ({ className, text, disabled, image, ...rest }) => {
  const classes = clsx('button', className, { disabled: disabled });
  return (
    <button {...rest} className={classes} disabled={disabled}>
      <span>{text}</span>
      {image && <img src={image} alt='icon' />}
    </button>
  );
};

export default React.memo(Button);
