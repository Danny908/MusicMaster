import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ToolBarContainer } from './components/toolbar/toolbar.container';
import { Routes } from './routes';
import { configStore } from './redux-root/store';
import './App.scss';

const store = configStore();

const App = (props) => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <div className='app-container'>
          <ToolBarContainer />
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;