import { useState, useEffect } from 'react';
import config from './config.json';
import csv from 'csvtojson';
//import Header from './Header';
import HerosGrid from './HerosGrid';


function MarvelCharactersPage(props) {
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
        <div>
            <div>
                <h1>MarvelCharactersPage</h1>
            </div>

            <div>
                <HerosGrid
                    data={marvel}
                />
            </div>
        </div>
    );
}
export default MarvelCharactersPage;