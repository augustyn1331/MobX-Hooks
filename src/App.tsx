import Movies from './mobX/movies/Movies';
import Notes from './mobX/notes/Notes';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '150px',
      }}
    >
      <Notes />
      <Movies />
    </div>
  );
}

export default App;
