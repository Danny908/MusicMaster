import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

const style = {
  message: {
    marginLeft: '20px'
  }
}

const Fetching = (props) => {
  return (
    <div>
      <h1 className={props.classes.message}>
        {props.error ? props.error.message: 'Loading ...'}
      </h1>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    error: state.error,
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, null)(injectSheet(style)(Fetching));