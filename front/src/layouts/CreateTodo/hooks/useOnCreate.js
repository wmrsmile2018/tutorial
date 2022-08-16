import axios from 'axios';
import { useCallback } from 'react';

export const useOnCreate = ({ baseUrl, state }) => {
  return useCallback(() => {
    axios.post(`${baseUrl}/todos`, {
      ...state,
      id: Math.floor(Math.random() * 10000),
      checked: false,
    });
  }, [baseUrl, state]);
};
