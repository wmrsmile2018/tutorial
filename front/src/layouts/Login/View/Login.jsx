import clsx from 'clsx';
import { memo } from 'react';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { Logo } from '../../../components/Logo';
import { MarginGroup } from '../../../components/MarginGroup/MarginGroup';
import { SignInFormBl } from '../../SignInForm';
import { LOGIN_CONSTANTS } from '../constants';
import './styles.scss';

export const Login = memo(({ onSubmit }) => {
  const classes = clsx('login');
  return (
    <MarginGroup className={classes} isColumn>
      <Header>
        <MarginGroup className='login-header' gap={20}>
          <Logo type={'sm'} />
          <p>{LOGIN_CONSTANTS.headerText}</p>
        </MarginGroup>
      </Header>
      <MarginGroup className='login-content'>
        <Logo type={'lg'} />
        <MarginGroup className='sign-in-wrapper'>
          <SignInFormBl onSubmit={onSubmit} />
        </MarginGroup>
      </MarginGroup>
      <Footer>FOOTER</Footer>
    </MarginGroup>
  );
});
