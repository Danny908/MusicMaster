import { takeLatest, put, call } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import axios from 'axios';

import { API_CALL_REQUEST, API_CALL_DONE, API_CALL_FAILURE } from './redux/constants';

const API_URL = 'https://api.spotify.com/v1';
const API_TOKEN = '';

export function* watcherAPI() {
  yield takeLatest(API_CALL_REQUEST, workerAPI);
}

function* workerAPI(action) {
  const responseName = action.request.name;
  try {
    const response = yield call(doRequest, action.request);
    // yield put({type: API_CALL_DONE, name: responseName, [responseName]: response.data})
    yield put(createAction(API_CALL_DONE)(response.data));
  } catch(error) {
    yield put({type: API_CALL_FAILURE, name: responseName, error: error.response.data.error})
  }
}

function doRequest(action) {
  let {method, path, data, headers, params} = action.options;
  headers = {...headers,  Authorization: API_TOKEN}
  return axios({
    method,
    url: `${API_URL}${path}`,
    data,
    headers,
    params
  });
}
