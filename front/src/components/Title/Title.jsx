import clsx from 'clsx';
import { memo } from 'react';
import './styles.scss';

export const Title = memo(({ title }) => {
  const classes = clsx('title');
  return <p className={classes}>{title}</p>;
});
