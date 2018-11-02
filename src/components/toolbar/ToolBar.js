import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';

import { apiCallRequest } from '../../redux/actions/actions';
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
  constructor(props) {
    super(props);
    this.props.getProfile({
      name: 'me',
      options: {
        method: 'GET',
        path: '/me'
      }
    });
    this.state = {
      show: false
    }
  }
  render() {
    const { me, classes, history } = this.props;
    return(
      <header className={classes.container}>
        {
          (!!me) ? (
            <div 
              className={classes.toolOption}
              onMouseEnter={() => this.setState({show: true})}
              onMouseLeave={() => this.setState({show: false})}>
              <img 
                className={classes.profilePic}
                src={me.images[0].url} 
                alt="Profile"/>
              <p 
                className={classes.profileName}>
                {me.display_name}
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
    const myClasses = `${classes.listContainer} ${this.state.show ? 'show' : ''}`;
    return(
      <div className={myClasses}>
        {template}
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(ToolBar)));