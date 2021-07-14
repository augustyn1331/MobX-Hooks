import { useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import { createNotesStore, notesStore } from './NotesStore';

const NotesContext = React.createContext<notesStore | any>(null);

interface NotesProviderProps {
  children: React.ReactNode;
}
export const NotesProvider = ({ children }: NotesProviderProps) => {
  const notesStore = useLocalObservable(createNotesStore);
  return (
    <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>
  );
};

export const useNotesStore = () => React.useContext<notesStore>(NotesContext);
