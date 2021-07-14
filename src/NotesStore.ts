import { nanoid } from 'nanoid';

export interface notesState {
  text: string;
  id: string;
}
export interface notesStore {
  notes: notesState[];
  addNote: (text: string) => void;
  removeNote: (text: string) => void;
}
export function createNotesStore(): notesStore {
  return {
    notes: [{ text: '', id: '' }],
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
