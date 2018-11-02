import React from 'react';
import injectSheet from 'react-jss';

const style = {
  listItem: {
    padding: '15px',
    borderTop: '1px solid rgb(31, 31, 31)',
    borderBottom: '1px solid rgb(31, 31, 31)',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
    }
  }
}

const ListOption = (props) => {
  const { classes, data, history } = props;
  const goTo = () => {
    if (data.path !== history.location.pathname) {
      history.push(data.path)
    }
  }
  return (
    <div 
      className={ classes.listItem }
      onClick={goTo}>
      {data.value}
    </div>
  )
}

export default injectSheet(style)(ListOption);