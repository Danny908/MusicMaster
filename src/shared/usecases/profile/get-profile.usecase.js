import axios from 'axios';
import { createAction } from 'redux-actions';
import { takeLatest, put, call } from 'redux-saga/effects';
import { mergeSaga } from '@dealersocket/react-common';

import { reducer } from './profile.reducer';
import { API_CONFIG } from '../../../api.cofig';

const prefix = reducer.sliceName;

const PROFILE_LOAD = `${prefix}LOAD`;
const PROFILE_LOAD_SUCCESS = `${prefix}LOAD_SUCCESS`;
const PROFILE_LOAD_ERROR = `${prefix}LOAD_ERROR`;
const {path, token}  = API_CONFIG;

export const getProfile = createAction(PROFILE_LOAD);

function* getProfileWatch() {
  yield takeLatest(PROFILE_LOAD, getProfileWorker)
}
mergeSaga(getProfileWatch);
function* getProfileWorker() {
  try {
    const response = yield call(getProfileRequest);
    yield put(createAction(PROFILE_LOAD_SUCCESS)(response));
  } catch(err) {
    yield put(createAction(PROFILE_LOAD_ERROR)(err));
  }
}

function getProfileRequest() {
  return axios({
    method: 'GET',
    url: `${path}/me`,
    headers: {
      Authorization: token
    }
  });
}

const reduceHandlers = {
  [PROFILE_LOAD]: (state) =>{
    return {
      ...state,
      loading: true,
      error: false
    }
  },
  [PROFILE_LOAD_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: false,
      data: action.payload.data
    }
  },
  [PROFILE_LOAD_ERROR]: (state, action) => {
    const error = action.payload.response.data.error;
    return {
      ...state,
      loading: false,
      error
    }
  }
}

reducer.addHandlers(reduceHandlers);

export const testPort = {
  PROFILE_LOAD,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_ERROR,
  getProfileWatch,
  getProfileWorker,
  getProfileRequest,
  reduceHandlers
};