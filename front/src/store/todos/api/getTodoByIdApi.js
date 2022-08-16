import { sagaEventCallBegan } from '../../saga';
import { getTodoById } from '../reducer';

export const getTodoByIdApi = (dispatch) => (id) => {
  dispatch({
    payload: {
      url: `/todos/${id}`,
      method: 'get',
      onSuccess: getTodoById.type,
    },
    type: sagaEventCallBegan.type,
  });
};
