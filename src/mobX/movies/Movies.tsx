import { useEffect } from 'react';
import { useMoviesStore } from './MoviesContext';
import { Observer } from 'mobx-react-lite';

function Movies() {
  const moviesStore = useMoviesStore();
  useEffect(() => {
    moviesStore.load();
  }, [moviesStore]);
  const renderFn = () => {
    console.log(moviesStore.loading);

    return (
      <>
        <ul>
          {moviesStore.movies.map((movies) => (
            <li key={movies.id}>{movies.title}</li>
          ))}
        </ul>
      </>
    );
  };
  /*Observer wrMovieser converts our component into reactive component*/
  return <Observer>{renderFn}</Observer>;
}

export default Movies;
