import React, {useState} from 'react';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);



  return (
    <li>
      <span className='player'>
        <span className='player-name'>{name}</span>
        <span className='player-symbol'>{symbol}</span>
        <button>Edit</button>
      </span>
    </li>
  );
};

export default Player
