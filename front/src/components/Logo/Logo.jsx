import clsx from 'clsx';
import LogoImg from '../../assets/image.jpeg';

const size = {
  lg: {
    width: 500,
    height: 500,
  },
  md: {
    width: 120,
    height: 120,
  },
  sm: {
    width: 36,
    height: 36,
  },
};

export const Logo = ({ type, onClick }) => {
  const classes = clsx('logo');
  return (
    <img
      onClick={onClick}
      style={size[type]}
      className={classes}
      src={LogoImg}
      alt='logo'
    />
  );
};
