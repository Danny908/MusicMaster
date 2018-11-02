import React from 'react'
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Profile from './components/profile/Profile';
import ToolBar from './components/toolbar/ToolBar';
import reducers from './redux/reducers/reducers';
import { watcherAPI } from './sagas';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), reduxDevTools));
sagaMiddleware.run(watcherAPI);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
      <ToolBar />
      <Route path="/dashboard" component={App}></Route>
      <Route path="/profile" component={Profile}></Route>
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);