import { useState } from 'react';
import { useChangeUserParams } from './hooks/useChangeUserParams';
import { useOnSubmitForm } from './hooks/useOnSubmitForm';
import { SignInForm } from './View/SignInForm';

export const SignInFormBl = ({ onSubmit }) => {
  const [userParams, setUserParams] = useState({
    password: '',
    login: '',
  });

  const onChangeUserParams = useChangeUserParams(setUserParams);
  const onSubmitForm = useOnSubmitForm({ onSubmit, userParams });

  return (
    <SignInForm
      onSubmit={onSubmitForm}
      onChangeUserParams={onChangeUserParams}
      userParams={userParams}
      disabled={userParams.password === '' || userParams.login === ''}
    />
  );
};
