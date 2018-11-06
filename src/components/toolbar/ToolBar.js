import React, { Component } from 'react';
import injectSheet from 'react-jss';

import ListOption from '../../shared/components/list-option/ListOption';

const styles = {
  container: {
    height: '60px',
    width: '100%',
    backgroundColor: '#333333',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  toolOption: {
    display: 'inherit',
    flexDirection: 'inherit',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      cursor: 'pointer'
    }
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
    margin: '0 0 0 15px',
  },
  listContainer: {
    backgroundColor: '#5C5C5C',
    position: 'absolute',
    top: '100%',
    width: '100%',
    display: 'none',
    '&.show': {
      display: 'block'
    } 
  }
}

class ToolBar extends Component {
  componentDidMount() {
    if (!this.props.profile.data) {
      this.props.getProfile();
    }
  }
  render() {
    const { profile, classes, history } = this.props;
    const { data } = profile;
    return(
      <header className={classes.container}>
        {
          (!!data) ? (
            <div 
              className={classes.toolOption}
              onMouseEnter={() => this.props.onToggle()}
              onMouseLeave={() => this.props.onToggle()}>
              <img 
                className={classes.profilePic}
                src={data.images[0].url} 
                alt="Profile"/>
              <p 
                className={classes.profileName}>
                {data.display_name}
              </p>
              {this.listOption(classes, history)}
            </div>
          ) : 
          (null)
        }
      </header>
        
    )
  }

  listOption(classes, history) {
    const status = this.props.toggle;
    const options = [
      {
        value: 'Profile',
        path: '/profile'
      },
      {
        value: 'Dashboard',
        path: '/dashboard'
      }
    ];
    const template = options.map((option, i) => {
      return(
        <ListOption
          history={history}
          data={option}
          key={i}
        />
      );
    });
    const myClasses = `${classes.listContainer} ${status ? 'show' : ''}`;
    return(
      <div className={myClasses}>
        {template}
      </div>
    )
  }
}

export default injectSheet(styles)(ToolBar);