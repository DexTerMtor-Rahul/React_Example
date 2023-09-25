import React from 'react';
const userInput = (props) => {
     const style = {
          border: '2px solid red',
          padding: '10px'
     };
     return <input 
          type='text'
          style={style} 
          onChange={props.click} 
          value={props.currentName}>
          </input>
}    

export default userInput;