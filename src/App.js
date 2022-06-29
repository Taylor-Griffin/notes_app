import { useState } from 'react';
import Note from './components/Note';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('a new note...');
  console.log(notes);

  const addNote = (event) => {
    event.preventDefault();
    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() < 0.5,
      },
    ]);
    setNewNote('');
  };
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={(e) => setNewNote(e.target.value)} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
