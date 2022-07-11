import React from 'react';

export const Note = ({ note, toggleImportance }) => {
  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>Important</button>
    </li>
  );
};

export default Note;
