import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import config from './config.json';
import csv from 'csvtojson';
import Header from './Header';
import MarvelHerosGrid from './MarvelHerosGrid';

function App() {
  const { dataHostName } = config;
  const [marvel, setMarvel] = useState([])

  useEffect(() => {
    fetch(`${dataHostName}/marvel_characters_info.csv`)
      .then(r => r.text())
      .then(r => csv().fromString(r))
      .then(res => {
        console.log("received data:", res)
        setMarvel(res)
      })
  }, [dataHostName])

  return (
    <div className="App">
      <Header />
      <div>
        <MarvelHerosGrid
          data={marvel}
        />
      </div>
    </div>
  );
}

export default App;
