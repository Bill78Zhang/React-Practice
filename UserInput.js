import React from 'react';

const userInput = props => {
  return (
    <div>
      <input onChange={props.changed} type='text' defaultValue='Bill'></input>
    </div>
  );
};

export default userInput;
