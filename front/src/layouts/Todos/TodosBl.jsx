import { useState, useEffect, useContext } from 'react';
import { Todos } from './View/Todos';
import { useHandlerOnChangeCheckbox } from './hooks/useHandlerOnChangeCheckbox';
import { useHandlerGoToDetail } from './hooks/useHandlerGoToDetail';
import { useNavigate } from 'react-router-dom';
import { setItem } from '../../utils/localStorage';
import { ApiContext } from '../../App';
import axios from 'axios';

export const TodosBl = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const { baseUrl } = useContext(ApiContext);

  useEffect(() => {
    axios.get(`${baseUrl}/todos`).then((res) => {
      setTodos(res.data);
      // setItem('todos', res.data);
    });
  }, [baseUrl]);

  const useChangeCheckbox = useHandlerOnChangeCheckbox(setTodos);
  const useGoToDetail = useHandlerGoToDetail(navigate);

  return (
    <Todos
      todos={todos}
      useChangeCheckbox={useChangeCheckbox}
      useGoToDetail={useGoToDetail}
    />
  );
};
