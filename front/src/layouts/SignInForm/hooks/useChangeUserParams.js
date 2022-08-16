import { useCallback } from 'react';

export const useChangeUserParams = (setUserParams) => {
  return useCallback(
    ({ target }) => {
      setUserParams((prev) => {
        return {
          ...prev,
          [target.name]: target.value,
        };
      });
    },
    [setUserParams]
  );
};
