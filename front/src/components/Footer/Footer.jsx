import clsx from 'clsx';
import './styles.scss';

export const Footer = ({ children }) => {
  const classes = clsx('footer');
  return <div className={classes}>{children}</div>;
};
