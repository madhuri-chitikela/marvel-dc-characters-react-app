import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import HomePage from './HomePage';
import MarvelCharactersPage from './MarvelCharactersPage';
import MarvelDCCharactersPage from './MarvelDCCharactersPage';
import PowerMatrixPage from './PowerMatrixPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route path="/marvel">
              <MarvelCharactersPage />
            </Route>
            <Route path="/marvel-dc">
              <MarvelDCCharactersPage />
            </Route>
            <Route path="/power-matrix">
              <PowerMatrixPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
