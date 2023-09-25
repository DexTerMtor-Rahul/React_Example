import React from 'react';
import './UserOutput.css';
const userOutput  = (progs) => {
     return (
          <div className='UserOutput'>
               <p>Username: {progs.userName}</p>
               <p>And Some more random Text!!</p>
          </div>
     )
}

export default userOutput;