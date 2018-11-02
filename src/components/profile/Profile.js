import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import Fetching from '../../shared/components/fetching/Fetching';

const style = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px 20px 20px'
  },
  title: {
    borderBottom: '1px solid gray',
    width: '350px',
    textAlign: 'center'
  },
  profileContainer: {
    backgroundColor: 'whitesmoke',
    boxSizing: 'border-box',
    width: '350px',
    padding: '20px',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  picture: {
    borderRadius: '50%',
    width: '150px'
  },
  dataContainer: {
    width: '100%',
    marginTop: '25px'
  },
  label: {
    color: 'gray',
    fontSize: '18px',
    marginBottom: '10px'
  },
  data: {
    color: '#333333',
    fontSize: '16px',
    margin: 0
  }
}

const Profile = (props)  => {
    const { me, classes, fetching, error } = props;
    return (fetching || error) ? (
      <Fetching />
    ): 
    (
      <div className={classes.container}>
        <h1 className={classes.title}>Profile</h1>
        <div className={classes.profileContainer}>
          <img className={classes.picture} src={me.images[0].url} alt="Profile"/>
          <div className={classes.dataContainer}>
            <p className={classes.label}>Username</p>
            <p className={classes.data}>{me.display_name}</p>
            <p className={classes.label}>Email</p>
            <p className={classes.data}>{me.email}</p>
            <p className={classes.label}>Birthday</p>
            <p className={classes.data}>{me.birthdate}</p>
            <p className={classes.label}>Country</p>
            <p className={classes.data}>{me.country}</p>
          </div>
        </div>
      </div>
    );
};

function mapStateToProps(state) {
  return {
    me: state.me,
    error: state.error,
    fetching: state.fetching
  }
}

export default connect( mapStateToProps, null )(injectSheet(style)(Profile));