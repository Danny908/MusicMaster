import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss'

import { apiCallRequest } from '../../redux/actions/actions';

const styles = {
  container: {
    height: '60px',
    width: '100%',
    backgroundColor: '#333333',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  profilePic: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    alignSelf: 'center',
    margin: '0 20px 0 15px'
  },
  profileName: {
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 0,
  }
}

class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.props.getProfile({
      name: 'me',
      options: {
        method: 'GET',
        path: '/me'
      }
    });
  }
  render() {
    const { me, classes } = this.props;
    return(
      <header className={classes.container}>
        {
          (!!me) ? (
            <>
              <img 
                className={classes.profilePic}
                src={me.images[0].url} 
                alt="Profile"/>
              <p 
                className={classes.profileName}>
                {me.display_name}
              </p>
            </>
          ) : 
          (null)
        }
      </header>
        
    )
  }
}

function mapStateToProps(state) {
  return {
    me: state.me
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: requestOptions => dispatch(apiCallRequest(requestOptions))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(ToolBar));