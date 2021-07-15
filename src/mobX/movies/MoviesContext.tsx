import { useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import { MoviesStore } from '../../models';
import { createMoviesStore } from './MoviesStore';

const MoviesContext = React.createContext<MoviesStore>({} as MoviesStore);

export const MoviesProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const moviesStore = useLocalObservable(createMoviesStore);
  return (
    <MoviesContext.Provider value={moviesStore}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesStore = () =>
  React.useContext<MoviesStore>(MoviesContext);
