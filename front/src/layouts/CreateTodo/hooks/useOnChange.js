import { useCallback } from 'react';

export const useOnChange = (setState) => {
  return useCallback(
    ({ target }) => {
      setState((prev) => {
        return {
          ...prev,
          [target.name]: target.value,
        };
      });
    },
    [setState]
  );
};
