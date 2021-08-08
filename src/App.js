import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Header';
import MarvelHerosGrid from './MarvelHerosGrid';
import config from './config.json'
import { useEffect, useState } from 'react';
import csv from 'csvtojson'


function App() {
  const { dataHostName } = config
  const [marvelCharacters, setMarvelCharacters] = useState([])

  useEffect(() => {
    fetch(`${dataHostName}/marvel_characters_info.csv`)
      .then(r => r.text())
      .then(r => csv().fromString(r))
      .then(res => {
        console.log("Received marvelCharacters", res)
        setMarvelCharacters(res)
      })
  }, [dataHostName])
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <MarvelHerosGrid
          data={marvelCharacters}
        />
      </div>
    </div>
  );
}

export default App;
