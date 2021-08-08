import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Header';
import MarvelHerosGrid from './MarvelHerosGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <MarvelHerosGrid />
    </div>
  );
}

export default App;
