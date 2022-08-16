import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../App';
import { TodoDetail } from './View/TodoDetail';
import { useParams } from 'react-router-dom';
import { useTodo } from '../../store/todos/api/index';

export const TodoDetailBl = () => {
  const { baseUrl } = useContext(ApiContext);
  const { id: todoId } = useParams();
  const [todo] = useState(null);

  const { getTodoById } = useTodo();

  useEffect(() => {
    getTodoById(todoId);
  }, [baseUrl, getTodoById, todoId]);

  return todo ? <TodoDetail todo={todo} /> : <div>Идет загрузка</div>;
};
