import clsx from 'clsx';
import { memo } from 'react';
import { MarginGroup } from '../../../components/MarginGroup/MarginGroup';
import { Input } from '../../../components/Input/Input';
import { INPUT_FIELDS } from '../constants';
import './styles.scss';
import { Title } from '../../../components/Title';
import Button from '../../../components/Button/Button';

export const CreateTodoView = memo(({ onChange, state, onCreate }) => {
  const classes = clsx('create-todo');
  return (
    <MarginGroup className={classes} isColumn>
      <Title title={'Создание задачи'} />
      <MarginGroup className='create-todo-content' isColumn gap={30}>
        <MarginGroup className='create-todo-fields' isColumn gap={20}>
          {INPUT_FIELDS.map((field) => (
            <Input
              key={field.name}
              onChange={onChange}
              value={state[field.name]}
              label={field.label}
              name={field.name}
            />
          ))}
        </MarginGroup>
        <Button onClick={onCreate} text={'Создать'} />
      </MarginGroup>
    </MarginGroup>
  );
});
