import { Notes } from "./Notes";

export interface NotesStore {
    notes: Notes[];
    addNote: (text: string) => void;
    removeNote: (text: string) => void;
  }