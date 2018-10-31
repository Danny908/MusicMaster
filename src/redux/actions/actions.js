import { API_CALL_REQUEST } from '../constants';

export const apiCallRequest = (options) => {
  const action = {
    type: API_CALL_REQUEST,
    request: options
  }
  return action;
};