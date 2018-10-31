import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';

class App extends Component {
  componentDidUpdate() {
    console.log(this.props.error);
    if(this.props.error) {
      this.props.history.push('/error');
    }
  }
  render() {

    return(
      <>
      {
        this.props.fetching ? (<h1>Loading ...</h1>) : (<h1>Welcome</h1>)
      }
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    me: state.me,
    error: state.error,
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, null)(App);