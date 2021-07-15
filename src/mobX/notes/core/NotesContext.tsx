import React, { createContext, useContext } from 'react';
import { NotesStoreClass } from './NotesStore';

const NotesContext = createContext<NotesStoreClass>({} as NotesStoreClass);

//Nowa instacja klasy stworzonej wcześniej jest naszym store
const notesStore = new NotesStoreClass();

export const NotesProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>
  );
};

export const useNotesStore = () => useContext<NotesStoreClass>(NotesContext);
