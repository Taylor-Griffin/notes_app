import React from 'react';

export const Note = ({ note, toggleImportance }) => {
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>Important</button>
    </li>
  );
};

export default Note;
