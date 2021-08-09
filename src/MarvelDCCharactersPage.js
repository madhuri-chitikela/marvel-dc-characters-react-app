import { useEffect, useState } from 'react';
import csv from 'csvtojson';

import config from './config.json'
import HerosGrid from './HerosGrid';

export default function MarvelDCCharactersPage() {
    const { dataHostName } = config
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`${dataHostName}/marvel_dc_characters.csv`)
            .then(r => r.text())
            .then(r => csv().fromString(r))
            .then(res => {
                console.log("Received marvelDCCharacters", res)
                setData(res)
            })
    }, [dataHostName])

    return (
        <div>
            <h1>MarvelDCCharactersPage</h1>
            <HerosGrid
                data={data}
            />
        </div>
    )
}