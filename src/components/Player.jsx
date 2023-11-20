import React, {useState} from 'react';

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const togglePlayerName = () => {
    setIsEditing(editing => !editing)
  }

  const handleChange = (event) => {
    console.log(event)
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>
  let btnCaption = 'Edit'

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    btnCaption = 'Save';
  }

  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
        <button onClick={togglePlayerName}>{btnCaption}</button>
      </span>
    </li>
  );
};

export default Player
