import React, { createContext, useContext } from 'react';
import { NotesStore } from '../../../models';
import { createNotesStore } from './NotesStore';
import { useLocalObservable } from 'mobx-react-lite';

const NotesContext = createContext<NotesStore>({} as NotesStore);

export const NotesProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  //Hook useLocalObservable z mobx-react-lite, 
  //tworzący dla nas store na podstawie obiektu który zwróciliśmy wcześniej
  const notesStore = useLocalObservable(createNotesStore);
  return (
    <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>
  );
};

export const useNotesStore = () => useContext<NotesStore>(NotesContext);
