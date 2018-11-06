import React from 'react';
import injectSheet from 'react-jss';

import Fetching from '../../shared/components/fetching/Fetching';

const style = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    borderBottom: '1px solid gray',
    width: '350px'
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
    width: '150px',
    border: '1px solid gray'
  },
  dataContainer: {
    width: '100%',
    marginTop: '25px'
  },
  label: {
    color: 'black',
    fontSize: '18px',
    marginBottom: '10px'
  },
  data: {
    color: '#333333',
    fontSize: '16px',
    margin: 0
  }
}

const Profile = (props) => {
    const { profile, classes } = props;
    const {data, loading, error} = profile;

    return (loading || !data || error) ? (
      <Fetching error={error} />
    ): 
    (
      <div className={classes.container}>
        <h1 className={classes.title}>Profile:</h1>
        <div className={classes.profileContainer}>
          <img className={classes.picture} src={data.images[0].url} alt="Profile"/>
          <div className={classes.dataContainer}>
            <p className={classes.label}>Username:</p>
            <p className={classes.data}>{data.display_name}</p>
            <p className={classes.label}>Email:</p>
            <p className={classes.data}>{data.email}</p>
            <p className={classes.label}>Birthday:</p>
            <p className={classes.data}>{data.birthdate}</p>
            <p className={classes.label}>Country:</p>
            <p className={classes.data}>{data.country}</p>
          </div>
        </div>
      </div>
    );
};

export default (injectSheet(style)(Profile));