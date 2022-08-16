import { useCallback } from 'react';
import { TODOS_ROUTE_TO_DETAIL } from '../routing';

export const useHandlerGoToDetail = (navigate) => {
  return useCallback(
    (id) => {
      return () => navigate(`${TODOS_ROUTE_TO_DETAIL}/${id}`);
    },
    [navigate]
  );
};
