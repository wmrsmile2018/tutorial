import { memo } from 'react';
import { Todo } from './view/Todo';

export const TodoBl = memo(
  ({ isChecked, todo, useChangeCheckbox, useGoToDetail }) => {
    const handleOnChange = useChangeCheckbox(todo.id);
    const onClick = useGoToDetail(todo.id);

    return (
      <Todo
        id={todo.id}
        avatar={todo.image}
        label={todo.label}
        checked={isChecked}
        onChange={handleOnChange}
        onClick={onClick}
      />
    );
  }
);
