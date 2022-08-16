import { MarginGroup } from '../../../components/MarginGroup/MarginGroup';
import { SIGN_IN_CONSTANTS, USER_PARAMS_FIELDS } from '../constants';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { Title } from '../../../components/Title';

import './styles.scss';
import clsx from 'clsx';

export const SignInForm = ({
  userParams,
  onChangeUserParams,
  onSubmit,
  disabled,
}) => {
  const classes = clsx('sign-in');
  return (
    <MarginGroup isColumn className={classes}>
      <Title title={'Авторизация'} />
      <MarginGroup gap={20} isColumn className='sign-in-form'>
        {USER_PARAMS_FIELDS.map((field) => {
          return (
            <Input
              key={field.name}
              name={field.name}
              value={userParams[field.name]}
              label={field.label}
              onChange={onChangeUserParams}
            />
          );
        })}
      </MarginGroup>
      <Button
        text={SIGN_IN_CONSTANTS.submit}
        onClick={onSubmit}
        disabled={disabled}
      />
    </MarginGroup>
  );
};
