import React from 'react';
import { connect } from 'react-redux';
import Fetching from './shared/components/fetching/Fetching';

import './App.scss';

const App = (props) => {
  return(
    <>
    {(props.fetching || props.error) ? (<Fetching />) : (<h1>Welcome</h1>)}
    </>
  )
}

function mapStateToProps(state) {
  return {
    me: state.me,
    error: state.error,
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, null)(App);