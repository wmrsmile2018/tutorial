import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { getTodoByIdApi } from './getTodoByIdApi';

const getTodosApi = () => {
  return () => {
    const dispatch = useDispatch();
    return useMemo(() => {
      return {
        getTodoById: getTodoByIdApi(dispatch),
      };
    }, [dispatch]);
  };
};

export const useTodo = getTodosApi();
