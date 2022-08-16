import { TodoBl } from '../../../components/Todo/TodoBl';
import { MarginGroup } from '../../../components/MarginGroup/MarginGroup';
import { Title } from '../../../components/Title/Title';
import clsx from 'clsx';
import Button from '../../../components/Button/Button';

export const Todos = ({ todos, useChangeCheckbox, useGoToDetail }) => {
  const classes = clsx('todos');
  return (
    <MarginGroup className={classes} isColumn>
      <Title title={'Список задач'} />
      <MarginGroup className={'todos-list'} gap={10} isColumn>
        {todos.map((todo) => {
          return (
            <TodoBl
              key={todo.id}
              todo={todo}
              useChangeCheckbox={useChangeCheckbox}
              useGoToDetail={useGoToDetail}
            />
          );
        })}
      </MarginGroup>
    </MarginGroup>
  );
};
