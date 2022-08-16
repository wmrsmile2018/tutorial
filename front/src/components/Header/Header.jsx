import clsx from 'clsx';
import './styles.scss';
export const Header = ({ children }) => {
  const classes = clsx('header');
  return <div className={classes}>{children}</div>;
};
