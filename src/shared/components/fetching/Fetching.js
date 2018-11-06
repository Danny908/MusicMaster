import React from 'react';

const Fetching = (props) => {
  const message = props.message ? props.message : 'Loading ...';
  return (
    <div>
      <h1>
        {props.error ? props.error.message: message}
      </h1>
    </div>
  )
}

export default Fetching;