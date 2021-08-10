import { useState, useEffect } from 'react';
import config from './config.json';
import csv from 'csvtojson';
//import Header from './Header';
import HerosGrid from './HerosGrid';


function MarvelDCCharactersPage(props) {
    const { dataHostName } = config;
    const [marvel, setMarvel] = useState([])

    useEffect(() => {
        fetch(`${dataHostName}/marvel_dc_characters.csv`)
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
                <h1>MarvelDCCharactersPage</h1>
            </div>

            <div>
                <HerosGrid
                    data={marvel}
                />
            </div>
        </div>
    );
}
export default MarvelDCCharactersPage;