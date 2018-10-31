import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

const style = {
  message: {
    marginLeft: '20px'
  }
}

class Error extends Component {
  
  componentDidUpdate() {
    if(!this.props.error && !this.props.fetching) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <h1 className={this.props.classes.message}>
          {this.props.error.message}
        </h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.error,
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, null)(injectSheet(style)(Error));