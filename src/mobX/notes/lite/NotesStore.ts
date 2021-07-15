import { nanoid } from 'nanoid';
import { NotesStore } from '../../../models';

export function createNotesStore(): NotesStore {
  return {
    //Tworzymy nasze obserwowalne zmienne
    notes: [{ text: '', id: '' }],
    
    //Tworzymy akcje
    addNote(text: string) {
      this.notes.push({
        text,
        id: nanoid(),
      });
    },
    removeNote(id: string) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  };
}
