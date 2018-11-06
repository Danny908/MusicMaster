import { initMergeSaga, initMergeSliceReducer } from '@dealersocket/react-common';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducers } from './reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export function configStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = 
  createStore(
    rootReducers(), 
    compose(
      applyMiddleware(sagaMiddleware),
      reduxDevTools
    )
  );

  initMergeSaga(sagaMiddleware);
  initMergeSliceReducer(store, rootReducers);
  
  return store;
}