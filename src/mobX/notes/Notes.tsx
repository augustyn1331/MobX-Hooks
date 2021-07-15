import { useNotesStore } from './lite/NotesContext';
import { NewNoteForm } from './NewNoteForm';
import { Observer } from 'mobx-react-lite';

function Notes() {
  const notesStore = useNotesStore();
  const renderFn = () => {
    return (
      <>
        <ul>
          <NewNoteForm />
          {notesStore.notes.map((note) => (
            <li onClick={() => notesStore.removeNote(note.id)} key={note.id}>
              {note.text}
            </li>
          ))}
        </ul>
      </>
    );
  };
  //Komponentem Observer owijamy funkcję renderującą nasz komponent,
  //aby reagował on na zmiany w obserwowalnym store.
  return <Observer>{renderFn}</Observer>;
}

export default Notes;
