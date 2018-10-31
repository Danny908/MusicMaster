import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

const style = {
  container: {
    width: '100%',
    height: '100%'
  }
}

class Profile extends Component {
  componentDidUpdate() {
    if (this.props.error) {
      this.props.history.push('/error');
    }
  }
  render() {
    return (
      <div className={this.props.classes.container}>

      </div>
    )
  }
  
}

function mapStateToProps(state) {
  return {
    me: state.me,
    error: state.error
  }
}

export default connect( mapStateToProps, null )(injectSheet(style)(Profile));