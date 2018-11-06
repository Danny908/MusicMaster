import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { mergeSaga } from '@dealersocket/react-common';

import { reducer } from './get-playlist.reducer';
import { API_CONFIG } from '../../../api.cofig';

const prefix = reducer.sliceName;
const PLAYLIST_LOAD = `${prefix}LOAD`;
const PLAYLIST_LOAD_SUCCESS = `${prefix}LOAD_SUCCESS`;
const PLAYLIST_LOAD_ERROR = `${prefix}LOAD_ERROR`;
export const getPlaylist = createAction(PLAYLIST_LOAD);

function* getPlaylistWatcher() {
  yield takeLatest(PLAYLIST_LOAD, getPlaylistWorker);
}
mergeSaga(getPlaylistWatcher);
function* getPlaylistWorker() {
  try {
    const response = yield call(getPlaylistRequest);
    yield put(createAction(PLAYLIST_LOAD_SUCCESS)(response))
  } catch(err) {
    yield put(createAction(PLAYLIST_LOAD_ERROR)(err));
  }
}

function getPlaylistRequest() {
  const { path, token } = API_CONFIG;
  return axios({
    method: 'GET',
    url: `${path}/me/playlists`,
    headers: {
      Authorization: token
    }
  });
}

const reduceHandlers = {
  [PLAYLIST_LOAD]: (state) => {
    return {
      ...state,
      error: false,
      loading: true
    }
  },
  [PLAYLIST_LOAD_SUCCESS]: (state, action) => {
    return {
      ...state,
      error: false,
      loading: false,
      data: action.payload.data.items
    }
  },
  [PLAYLIST_LOAD_ERROR]: (state, action) => {
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
  PLAYLIST_LOAD,
  PLAYLIST_LOAD_SUCCESS,
  PLAYLIST_LOAD_ERROR,
  getPlaylistWatcher,
  getPlaylistWorker,
  getPlaylistRequest,
  reduceHandlers
};