import clsx from 'clsx';
import { memo } from 'react';

export const Image = memo(({ src, onClick }) => {
  const classes = clsx('image');
  return <img className={classes} src={src} onClick={onClick} alt='img' />;
});
