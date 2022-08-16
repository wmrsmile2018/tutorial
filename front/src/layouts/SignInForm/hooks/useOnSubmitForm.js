import { useCallback } from 'react';

export const useOnSubmitForm = ({ onSubmit, userParams }) => {
  return useCallback(() => {
    onSubmit(userParams);
  }, [onSubmit, userParams]);
};
