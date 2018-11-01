import { API_CALL_REQUEST, API_CALL_DONE, API_CALL_FAILURE } from '../constants';

const intialState = {
  fetching: null,
  error: null
};
const reducers = (state = intialState, action) => {
  console.log(action);
  switch(action.type) {
    case API_CALL_REQUEST: 
      return {...state, error: false, fetching: true, request: action.request};
    case API_CALL_DONE:
      return {...state, error: false, fetching: false, [state.request.name]: action.payload};
    case API_CALL_FAILURE:
      return {...state, error: action.error, fetching: false};
    default:
      return state;
  }
};

export default reducers;