import './styles.scss';
import clsx from 'clsx';
import { memo } from 'react';

export const Input = memo(
  ({ className, label, value, onChange, vertical, name }) => {
    const classes = clsx('input', { [className]: className, vertical });

    return (
      <label className={classes}>
        <span className='input-label'>{label}</span>
        <input value={value} onChange={onChange} name={name} />
      </label>
    );
  }
);
