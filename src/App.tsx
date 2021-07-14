import { Observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import { NewNoteForm } from './NewNoteForm';
import { useNotesStore } from './NotesContext';

function App() {
  const notesStore = useNotesStore();
  const renderFn = () => {
    return (
      <>
        <ul>
          {notesStore.notes.map((note) => (
            <li onClick={() => notesStore.removeNote(note.id)} key={note.id}>
              {note.text}
            </li>
          ))}
        </ul>
        <NewNoteForm />
      </>
    );
  };
  return <Observer>{renderFn}</Observer>;
}

export default App;
