import { nanoid } from 'nanoid';
import { Notes, NotesStore } from '../../../models';
import { makeAutoObservable } from 'mobx';

export class NotesStoreClass implements NotesStore{
  //Tworzymy nasze obserwowalne zmienne
  notes: Notes[] = [{ text: '', id: '' }];
  //W konstruktorze wywołujemy funkcję z mobx core, która uczyni nasze zmienne obserwowalnymi
  constructor() {
    makeAutoObservable(this);
  }
  //Tworzymy akcje
  addNote(text: string) {
    this.notes.push({
      text,
      id: nanoid(),
    });
  }
  removeNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
