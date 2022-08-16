import { useCallback } from 'react';

export const useHandlerOnChangeCheckbox = (setTodos) => {
  return useCallback(
    (id) => {
      return () =>
        setTodos((prev) => {
          return prev.map((todo) => {
            if (todo.id === id) {
              todo.checked = !todo.checked;
            }
            return todo;
          });
        });
    },
    [setTodos]
  );
};
