import { memo, useCallback } from 'react';
import { Login } from './View/Login';
import { useNavigate } from 'react-router-dom';

export const LoginBl = memo(() => {
  const navigate = useNavigate();
  const onSubmit = useCallback(
    (userParams) => {
      navigate('/home/todos');
      //TODO
      console.log(userParams);
    },
    [navigate]
  );

  return <Login onSubmit={onSubmit} />;
});
