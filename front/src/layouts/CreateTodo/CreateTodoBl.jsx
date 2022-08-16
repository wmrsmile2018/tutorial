import { memo, useState, useContext } from 'react';
import { CreateTodoView } from './View/CreateTodo';
import { IMAGE_PLACEHOLDER } from './constants';
import { useOnChange } from './hooks/useOnChange';
import { useOnCreate } from './hooks/useOnCreate';
import { ApiContext } from '../../App';

export const CreateTodo = memo(() => {
  const { baseUrl } = useContext(ApiContext);
  const [state, setState] = useState({
    image: IMAGE_PLACEHOLDER,
    label: '',
  });
  const onChange = useOnChange(setState);
  const onCreate = useOnCreate({ baseUrl, state });

  return (
    <CreateTodoView state={state} onChange={onChange} onCreate={onCreate} />
  );
});
